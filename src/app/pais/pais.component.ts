import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {Pais} from '../Modelo/pais';
import {PaisService} from '../pais.service';
import {SortableDirective, SortEvent} from '../sortable.directive';

import { faPlusCircle, faEdit, faTrashAlt, faSort} from '@fortawesome/free-solid-svg-icons';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';//para poder usar la ventana modal
import {CreateUpdatePaisComponent} from '../create-update-pais/create-update-pais.component';
import {DeleteModalComponent} from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
   providers: [PaisService, DecimalPipe]
})
export class PaisComponent {

 
/*Para usar los iconos de fontawesome*/
  faPlusCircle=faPlusCircle; 
  faEdit=faEdit;
  faTrashAlt = faTrashAlt;
  faSort = faSort;


  paises$: Observable<Pais[]>;
  total$: Observable<number>;

@ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  constructor(public service: PaisService,private modalService: NgbModal) {
    this.paises$ = service.paises$;
    this.total$ = service.total$;
  }

onUpdate(){
  this.modalService.open(CreateUpdatePaisComponent);
}

onDelete(){
  this.modalService.open(DeleteModalComponent);
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




}//FIN DE LA CLASE
