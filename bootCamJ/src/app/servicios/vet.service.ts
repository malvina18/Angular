import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vet } from '../models/vet';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  constructor(private http: HttpClient) { }

  getVets(){
    let pa = JSON.stringify({
      accion: "ListarVets"
    });
    return this.http.post<Vet[]>("http://localhost/ajax/petclinic/servicios.php",pa);
  }
}
