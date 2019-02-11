import { Component, OnInit, Input} from '@angular/core';
import {PAjaxService} from '../p-ajax.service';
@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.css']
})
export class ListaDetalleComponent implements OnInit {
//  atributo de entrada/parametro de entrada se importa
  @Input() factura: Object; // atributo de entrada
  private  listaDetalle;
  constructor(private servicioAjax: PAjaxService) { }

  ngOnInit() {
    console.log(this.factura);
   /* this.servicioAjax.pMostrarFacturas(this.factura.ID).subscribe(daticos => {
      this.listaDetalle = daticos;
      console.log(this.listaDetalle);
    });*/
  }
}
