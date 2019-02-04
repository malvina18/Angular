import { Component, OnInit } from '@angular/core';;
import {OwnersService} from '../../owners.service';

@Component({
  selector: 'app-listowner',
  templateUrl: './listowner.component.html',
  styleUrls: ['./listowner.component.css']
})
export class ListownerComponent implements OnInit {
  public owners;
// cuando creamos
  constructor(private servicioOwner: OwnersService ) {
  }
  // cuando lo iniciamos
  ngOnInit() {
    this.servicioOwner.getOwners().subscribe(datos => {
      console.log(datos);
      this.owners = datos;
    });
  }
}
