import {Component, OnInit} from '@angular/core';
import {Owner} from '../../models/owner';
import {OwnersService} from "../../services/owners.service";

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {
  public owner: Owner;

  constructor(private ajax: OwnersService) {
    this.owner = new Owner();
  }

  ngOnInit() {
  }

// funcion que se ejecuta cuando se pulsa el boton submit del formulario
  // recibe como parametro un propietario (owner) (los datos introdicidos en el formulario)
  onSubmit(owner: Owner) {
    this.ajax.insertarOwner(owner).subscribe(data => {
      owner = data;
    });
    console.log(owner);
    alert('Aqui añado');
  }
}
