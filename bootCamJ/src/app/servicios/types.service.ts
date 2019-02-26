import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pettype } from '../models/pettype';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private http: HttpClient) { }

  getPet(){
    let pa = JSON.stringify({
      accion: "ListarPettypes"
    });
    return this.http.post<any>("http://localhost/ajax/petclinic/servicios.php",pa);
  }

  addPettype(types : Pettype){
    let pa = JSON.stringify({
      accion: "AnadePettype",
      pettype: types
    });
    return this.http.post<any>("http://localhost/ajax/petclinic/servicios.php",pa);
  }

  getTypeById(id){
    let pa = JSON.stringify({
      accion: "ObtenerTypeId",
      id: id
    });
    return this.http.post<any>("http://localhost/ajax/petclinic/servicios.php",pa);
  }

  modPettype(types: Pettype){
    let pa = JSON.stringify({
      accion: "ModificaPettype",
      pettype: types
    });
    return this.http.post<any>("http://localhost/ajax/petclinic/servicios.php",pa);
  }

  delTypesList(id: number){
    let pa = JSON.stringify({
      accion: "BorraPettype",
      id: id
    });
    return this.http.post<any>("http://localhost/ajax/petclinic/servicios.php",pa);
  }
}
