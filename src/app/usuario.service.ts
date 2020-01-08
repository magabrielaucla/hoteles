import { Injectable, PipeTransform } from '@angular/core';
import {Usuario} from './Modelo/usuario';
import {USUARIOS} from './mock-usuarios';
import {SortDirection} from './sortable.directive';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';


interface SearchResult{

	usuarios : Usuario[];
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
 function sort(usuarios:Usuario[],column:string,direction:string): Usuario[]{
 	if (direction===''){
 		return usuarios;
 	}
 	else{
 		return [...usuarios].sort((a,b)=>{	
 			const res=compare(a[column],b[column]);
 			return direction=== 'asc' ? res:-res;
 		});
 		}
 }
 
 function matches(usuario: Usuario, term: string, pipe: PipeTransform) {
  return usuario.username.toLowerCase().includes(term.toLowerCase())
    || usuario.rol.includes(term)
    || pipe.transform(usuario.codTrabajador).includes(term);
}



@Injectable({providedIn: 'root'})
export class UsuarioService {

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _usuarios$ = new BehaviorSubject<Usuario[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

private _state: State = {
    page: 1,
    pageSize: 6,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };
   constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._usuarios$.next(result.usuarios);
      this._total$.next(result.total);
    });

    this._search$.next();
  }//fin del constructor

  get usuarios$() { return this._usuarios$.asObservable(); }
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
    let usuarios = sort(USUARIOS, sortColumn, sortDirection);

    // 2. filter
    usuarios = usuarios.filter(usuario => matches(usuario, searchTerm, this.pipe));
    const total = usuarios.length;

    // 3. paginate
    usuarios = usuarios.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({usuarios, total});
  }



}//fin de la clase
