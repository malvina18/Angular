import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  getOwners(){
    let pa = JSON.stringify({
      accion: "ListarOwners"
    });
    return this.http.post<Owner[]>("http://localhost/ajax/petclinic/servicios.php",pa);
  }

  getOwnersById(id){
    let pa = JSON.stringify({
      accion: "ObtenerOwnerId",
      id: id
    });
    return this.http.post<Owner>("http://localhost/ajax/petclinic/servicios.php",pa);
  }

  addOwner(owner : Owner){
    let pa = JSON.stringify({
      accion: "AnadeOwner",
      owner: owner
    });
    return this.http.post<any>("http://localhost/ajax/petclinic/servicios.php",pa);
  }

  delOwnerList(id: number){
    let pa = JSON.stringify({
      accion: "BorraOwner",
      id: id,
      listado: "OK"
    });
    return this.http.post<Owner[]>("http://localhost/ajax/petclinic/servicios.php",pa);
  }
  delOwner(id: number){
    let pa = JSON.stringify({
      accion: "BorraOwner",
      id: id,
      listado: "FAIL"
    });
    return this.http.post<Owner[]>("http://localhost/ajax/petclinic/servicios.php",pa);
  }
  modOwner(owner: Owner){
    let pa = JSON.stringify({
      accion: "ModificaOwner",
      owner: owner
    });
    return this.http.post<any>("http://localhost/ajax/petclinic/servicios.php",pa);
  }
}
