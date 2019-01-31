import { Injectable } from '@angular/core';
// importo la clase http
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {
// Variable:
private urlFotosNasa: string  =
  'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=4IKbbMHCbHWuRnnPO1AEuEoopxV5s4WK51FAWsDU';

  // creamos un objeto de tipo HttpClient
  constructor(private http: HttpClient) { }
  // Creamos una función "peti" para hacer peticiones:
  peti () {
    console.log ( 'Toy en peti' );
    // Hacemos la petición: (la devolvemos).
    return this.http.get(this.urlFotosNasa);
  }
}

