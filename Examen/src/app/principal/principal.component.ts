import {Component, OnInit} from '@angular/core';
import {PAjaxService} from '../p-ajax.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  private opSel: Object;  // objeto opSel /aqui guardamos la opcion seleccionada
  private opcionesSelect;
  public listaFactura: Object; // es lista defacturas  (lo que yo quiero pintar).
  constructor(private servicioAjax: PAjaxService) {
    servicioAjax.pListarFactura().subscribe(daticos => {
      this.opcionesSelect = daticos;
    });
  }
  ngOnInit() {
  }
  seleccion(parametro) {
    alert(' Has seleccionado la FACTURA ' + parametro.NUMERO + ' FECHA: ' + parametro.FECHA);
   this.servicioAjax.pMostrarFacturas(parametro.ID).subscribe(daticos => {
      this.listaFactura = daticos;
      // me muestra  la opcion que he elegido
      console.log(this.listaFactura);
    });
  }
  detalleAnadido() {
    alert('Hemos  llamado al detalle  añadido');
  }
}
