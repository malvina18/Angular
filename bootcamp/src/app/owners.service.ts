import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(private http: HttpClient) { }
  // funcion peticion ajax
  getOwners() {
    const pa = JSON.stringify({
      accion: 'ListarOwners'
    });
    // servicio con parametro
    return this.http.post('http://localhost/AJAX/petclinic/servicios.php', pa);
  }
}
