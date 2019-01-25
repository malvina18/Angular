import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-g-hobbit',
  templateUrl: './g-hobbit.component.html',
  styleUrls: ['./g-hobbit.component.css']
})
export class GHobbitComponent  {
  private lista: string[];
  private gHobbit: string;
  private accion: { id: number, nombre: string, indice: number };

  constructor() {
    /*convertimos cuando modifique o añade /se añade en listaHobbit */
    if ( localStorage.listaHobbit) {
      this.lista = JSON.parse(localStorage.listaHobbit);
    } else {
      this.lista = ['Bilbo', 'Sam Gamyi', 'Frodo Bolson', 'Rosita Coton', 'Merry Brandigano'];
      /*this.lista= new Array('Bilbo', 'Sam Gamyi', 'Frodo Bolson');*/
    }
    this.accion = {
      id: 1,
      nombre: 'Añadir',
      indice: -1
    };
    /*1->añadir  / 2-> Modificar*/

  }

  deleteHobbit(hobbit) {
    alert('Aqui borramos el hobbit ese');
    const pos = this.lista.indexOf(hobbit);
    this.lista.splice(pos, 1);
    localStorage.listaHobbit = JSON.stringify(this.lista);
  }

// EVENTO
  AnadirModificarHobbit() {
    // alert('Aqui añadimos un nuevo hobbit');
    // this.gHobbit = 'He cambiado el nombre del hobbit';
    if (this.accion.id === 1) {
      this.lista.push(this.gHobbit);
      localStorage.listaHobbit = JSON.stringify(this.lista);
    } else {
      /*EN ESTE CASO MODIFICO*/
      this.lista[this.accion.indice] = this.gHobbit;
      localStorage.listaHobbit = JSON.stringify(this.lista);
      this.accion.id = 1;
      this.accion.nombre = 'Añadir';
      this.accion.indice = -1;

    }
  }

  /*Creamos el evento para editar hobbit:*/

  editarHobbit(hobbit, i) {
    this.gHobbit = hobbit;
    this.accion.id = 2;
    this.accion.nombre = 'Modificar';
    this.accion.indice = i;
  }
}
