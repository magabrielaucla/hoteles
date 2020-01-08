import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  /*DATO A PASAR A LAS VENTANAS MODAL*/
  @Input() codigo;

  constructor(private modalService: NgbModal,public activeModal: NgbActiveModal) { }

  ngOnInit() {
  	this.codigo="HOLA";
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
