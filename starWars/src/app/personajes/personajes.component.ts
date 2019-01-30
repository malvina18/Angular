import { Component, OnInit } from '@angular/core';
import {PAjaxService } from '../p-ajax.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public datos: any; // todo lo que me va  a responder la api
  public listaPer: Object; // es lista de personas (lo que yo quiero pintar).
  public datosPlaneta:  Object = null;

  constructor(private serviciopAjax: PAjaxService) {
    // Hacemos la petición Ajax:
    serviciopAjax.peti().subscribe(daticos => {
      console.log(daticos);
      this.datos = daticos;
      this.listaPer = this.datos.results;
    });
  }

  ngOnInit() {
  }

  // Pedimos los datos del planeta que queremos mostrar.
  // callback  ESta funcion se ejecuta cuando click en el enlace.
  pedirPlaneta(evento, url: string) {
    evento.preventDefault();
    console.log(url + ' ?format=json');
    this.serviciopAjax.petiAurl(url + '?format=json').subscribe(res => {
      console.log(res);
      // se ejecuta cuando click en el enlace.
      this.datosPlaneta = res;
    });
  }



}
