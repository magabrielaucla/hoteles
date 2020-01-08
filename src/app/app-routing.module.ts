import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbCarouselComponent} from './ngb-carousel/ngb-carousel.component';
import {PaisComponent} from './pais/pais.component';
import {UsuarioComponent} from './usuario/usuario.component';
import {ModalLoginComponent} from './modal-login/modal-login.component';


const routes: Routes = [
{path:'' ,redirectTo:'/home',pathMatch:'full'},
{path:'home' ,component:NgbCarouselComponent},
{path:'pais', component:PaisComponent},
{path:'user', component:UsuarioComponent},
//{path:'modal', component:ModalLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
