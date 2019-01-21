import {Component, OnInit} from '@angular/core';

@Component({ // definimos componente
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {

  constructor() {
  }

  miVariable = 'Esta es mi variable de js en angular';
  miArray: string [];
  /* tipado :miArray: string ['Pan', 'Casa', 'Camino', 'Destino'];*/

  ngOnInit() {
    this.miArray = ['Pan', 'Casa', 'Camino', 'Destino'];
  }

}
