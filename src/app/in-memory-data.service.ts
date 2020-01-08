import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Pais} from './Modelo/pais';
import {PAISES} from './mock-pais';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  createDb() {
  	const PAISES : Pais[]=[
{codigo:1 , pais:'ARGENTINA', estatus:'A'},
{codigo:2 , pais:'BRASIL', estatus:'A'},
{codigo:3 , pais:'BOLIVIA', estatus:'A'},
{codigo:4 , pais:'CHILE', estatus:'A'},
{codigo:5 , pais:'COLOMBIA', estatus:'A'},
{codigo:6 , pais:'ECUADOR', estatus:'A'},
{codigo:8 , pais:'VENEZUELA', estatus:'A'},

];
return {PAISES};
  }

 // Overrides the genId method to ensure that a pais always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(paises: Pais[]): number {
    return paises.length > 0 ? Math.max(...paises.map(pais => pais.codigo)) + 1 : 11;
  }
}//FIN DE LA CLASE
