import { Injectable, PipeTransform } from '@angular/core';
import {Pais} from './Modelo/pais';
import {PAISES} from './mock-pais';

import {SortDirection} from './sortable.directive';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError,  map} from 'rxjs/operators';

interface SearchResult{

	paises : Pais[];
	total:number;
}

interface State{
	page:number;
	pageSize:number;
	searchTerm:string;
	sortColumn:string;
	sortDirection:string;
}

function compare(v1,v2){
	return v1 < v2 ? -1: v1 > v2 ? 1 : 0;
}
 function sort(paises:Pais[],column:string,direction:string): Pais[]{
 	if (direction===''){
 		return paises;
 	}
 	else{
 		return [...paises].sort((a,b)=>{	
 			const res=compare(a[column],b[column]);
 			return direction=== 'asc' ? res:-res;
 		});
 		}
 }

function matches(pais: Pais, term: string, pipe: PipeTransform) {
  return pais.pais.toLowerCase().includes(term.toLowerCase())
    || pais.estatus.includes(term)
    || pipe.transform(pais.codigo).includes(term);
}




@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private paisesUrl = 'api/paises'
  pais:Pais;
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _paises$ = new BehaviorSubject<Pais[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

private _state: State = {
    page: 1,
    pageSize: 6,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };


  constructor(private pipe: DecimalPipe, private http:HttpClient) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._paises$.next(result.paises);
      this._total$.next(result.total);
    });

    this._search$.next();
  }//FIN DEL CONSTRUCTOR

  get paises$() { return this._paises$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: string) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let paises = sort(PAISES, sortColumn, sortDirection);

    // 2. filter
    paises = paises.filter(pais => matches(pais, searchTerm, this.pipe));
    const total = paises.length;

    // 3. paginate
    paises = paises.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({paises, total});
  }

/*-----------------------------------------------------------------------------------*/
/** GET heroes from the server */
getPaises (): Observable<Pais[]> {
  return this.http.get<Pais[]>('');
}


}//FIN DE LA CLASE
