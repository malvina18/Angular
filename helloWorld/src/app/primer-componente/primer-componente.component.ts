import { Component, OnInit } from '@angular/core';

@Component({ // definimos componente
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
