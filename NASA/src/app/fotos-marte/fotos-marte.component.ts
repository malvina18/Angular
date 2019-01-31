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
  constructor(private serviciopAjax: PAjaxService) {
    // Hacemos la petición Ajax:
    serviciopAjax.peti().subscribe(daticos => {
      console.log(daticos);
      this.asignarDatos(daticos);
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
