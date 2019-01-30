import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {
  // que un componente tiene un parametro/ atributo de entrada/parametro de entrada se importa
@Input() planeta: Object; // atributo de entrada
  constructor() {
  }
  ngOnInit() {
    console.log('Voy a imprimir un planeta');
    console.log(this.planeta);
  }

}
