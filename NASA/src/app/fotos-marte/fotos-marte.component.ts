import { Component, OnInit } from '@angular/core';
// importo la peticion de pAjax
import {PAjaxService} from '../p-ajax.service';

@Component({
  selector: 'app-fotos-marte',
  templateUrl: './fotos-marte.component.html',
  styleUrls: ['./fotos-marte.component.css']
})
export class FotosMarteComponent implements OnInit {
  public datos: any; // todo lo que me va  a responder la api
  public listaFotos: Object; // es lista de personas (lo que yo quiero pintar).
  public listaPersona;
  constructor(private serviciopAjax: PAjaxService) {
    // Hacemos la petición Ajax:
    serviciopAjax.peti().subscribe(daticos => {
      console.log(daticos);
      this.asignarDatos(daticos);
    });
    // hacemos peticion lista persona
    serviciopAjax.hacerPetiListaPersona().subscribe(lista => {
      console.log(lista);
      this.listaPersona = lista;
    // , error => {
      //       console.log(error);
      //       alert('Ha habido un error');
    });
  }
  private asignarDatos(datos: Object) {
    this.datos = datos;
    console.log(this.datos);
    this.listaFotos = this.datos.photos;
  }
  ngOnInit() {
  }

}
