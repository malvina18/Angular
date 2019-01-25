import {Component, OnInit} from '@angular/core';
import {Alert} from 'selenium-webdriver';

@Component({
  selector: 'app-ejemplo-select',
  templateUrl: './ejemplo-select.component.html',
  styleUrls: ['./ejemplo-select.component.css']
})

export class EjemploSelectComponent implements OnInit {
  private opSel: Object;  // objeto opSel /aqui guardamos la opcion seleccionada
  // array opciones
  private opciones = [
    {id: -1, nombre: 'ACHO  !!!Selecciona opcion'},
    {id: 1, nombre: 'Opcion 1'},
    {id: 2, nombre: 'Opcion 2'},
    {id: 3, nombre: 'Opcion 3'},
    {id: 4, nombre: 'Opcion 4'},
    {id: 5, nombre: 'Opcion 5'},
  ];

  constructor() {
    // por defecto me salga un aopcion/ valor inicial en el select
    // this.opSel = this.opciones[0];
  }

  ngOnInit() {
    // por defecto me salga un aopcion/ valor inicial en el select
    // this.opSel = this.opciones[0];
  }

  seleccion(parametro) {
    console.log(parametro);
    alert(' Has seleccionado la opcion; ' + parametro.nombre
      + 'Valor:' + parametro.id);
  }
}
