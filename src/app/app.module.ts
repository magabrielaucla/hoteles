import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'; // Aqui se importa para usar la directiva *Ng

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './app.component';
import {DecimalPipe} from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';//PARA PODER USAR BOOTSTRAP COMPONENT
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { PaisComponent } from './pais/pais.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { NgbCarouselComponent } from './ngb-carousel/ngb-carousel.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SortableDirective } from './sortable.directive';
import { CreateUpdatePaisComponent } from './create-update-pais/create-update-pais.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    ModalLoginComponent,
    NgbCarouselComponent,
    LoginComponent,
    UsuarioComponent,
    SortableDirective,
    CreateUpdatePaisComponent,
    DeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false }),
    NgbModule,
    FontAwesomeModule,
  ],
  entryComponents : [
  ModalLoginComponent,
  CreateUpdatePaisComponent,
  DeleteModalComponent
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
