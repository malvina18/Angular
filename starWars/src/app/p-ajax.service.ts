import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  private urlPersonajes: string = 'http://swapi.co/api/people/?format=json';

  /*crenado una variable de tipo http (objeto)*/
  constructor(private http: HttpClient) {
  }

  // creamos funcion peti para hacer peticiones
  peti() {
    console.log('Tooy en peti');
    // hacemos la peticion (devolvemos)
    return this.http.get<any>(this.urlPersonajes);

  }
}
