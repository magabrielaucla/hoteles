import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

 import {Usuario} from '../Modelo/usuario';
 import {UsuarioService} from '../usuario.service';
 import {SortableDirective, SortEvent} from '../sortable.directive';

import { faPlusCircle, faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  providers: [UsuarioService, DecimalPipe]

})
export class UsuarioComponent  {
  /*Para usar los iconos de fontawesome*/
  faPlusCircle=faPlusCircle; 
  faEdit=faEdit;
  faTrashAlt = faTrashAlt;


  usuarios$: Observable<Usuario[]>;
  total$: Observable<number>;

@ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  constructor(public service: UsuarioService) {
    this.usuarios$ = service.usuarios$;
    this.total$ = service.total$;
  }
  

onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}//fin de la clase
