import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {
  // creamos variable url para la url del localhost.
  constructor(private http: HttpClient) {
  }
  pListarFactura() {
    console.log ( 'Toy en peti1' );
    const url = 'http://localhost/AJAX/Examen4/servidor.php';
    const parametro = {
      servicio: 'facturas'
    };
    return this.http.post(url, JSON.stringify(parametro));
  }
  pMostrarFacturas(id) {
    // creamos variable url para la url del localhost..
    const url = 'http://localhost/AJAX/Examen4/servidor.php';
    console.log ( 'Toy en peti2' );
    const parametro = {
      servicio: 'detalle',
       id : id
    };
    return this.http.post(url, JSON.stringify(parametro));
  }
}
