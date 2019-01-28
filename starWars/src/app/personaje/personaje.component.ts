import {Component, OnInit} from '@angular/core';
import {PAjaxService} from '../p-ajax.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  public  datos: any;
  public listaPer: Object[];
// LE PASO EL SERVICIO /callback
  constructor( private serviciopAjax: PAjaxService ) {
    // PETICION AJAX/llamo al metodo que me he creado
    serviciopAjax.peti().subscribe(daticos => {
      console.log(daticos);
      this.datos = daticos;
      this.listaPer = this.datos.result;
      console.log(this.listaPer);
    });
  }

  ngOnInit() {
  }

}
