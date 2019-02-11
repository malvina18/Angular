import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-anade-detalle',
  templateUrl: './anade-detalle.component.html',
  styleUrls: ['./anade-detalle.component.css']
})
export class AnadeDetalleComponent implements OnInit {
@Input() idFactura ;
@Output() nuevoDetalle = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }

}
