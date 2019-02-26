import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { OwnerService } from 'src/app/servicios/owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  public owners: Array<Owner>;
  //public owners: Owner[];

  constructor(private ruta: Router, private servicioOwner: OwnerService) { }

  ngOnInit() {
    this.servicioOwner.getOwners().subscribe(res=>{
      this.owners = res;
      console.log(res);
    })
  }

  del(owner: Owner){
    console.log(owner);
    const msg = "¿Estas seguro/a que desea borrar a " + owner.firstName + " " + owner.lastName + "?";
    if(confirm(msg)){
      this.servicioOwner.delOwnerList(owner.id).subscribe(res=>{
        this.owners = res;
        console.log(res);
      })
    }

  }

  mod(ownerId){
    console.log(ownerId);
    this.ruta.navigate(["owners-add", ownerId]);
  }
}
