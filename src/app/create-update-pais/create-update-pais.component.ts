import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Pais} from '../Modelo/pais';
import {PaisService} from '../pais.service';

@Component({
  selector: 'app-create-update-pais',
  templateUrl: './create-update-pais.component.html',
  styleUrls: ['./create-update-pais.component.css']
})
export class CreateUpdatePaisComponent implements OnInit {

  /*DATO A PASAR A LAS VENTANAS MODAL*/
  pais;

  constructor(
    public service: PaisService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }

	}//FIN DEL getDismissReason
}