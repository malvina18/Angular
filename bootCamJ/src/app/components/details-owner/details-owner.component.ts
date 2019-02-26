import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from 'src/app/servicios/owner.service';

@Component({
  selector: 'app-details-owner',
  templateUrl: './details-owner.component.html',
  styleUrls: ['./details-owner.component.css']
})
export class DetailsOwnerComponent implements OnInit {
  public owner: Owner;
  constructor(private ruta: Router, private route: ActivatedRoute, private servicioOwner: OwnerService) {
    this.owner = <Owner>{};
   }

  ngOnInit() {
    const ownerId = this.route.snapshot.params["id"];

    this.servicioOwner.getOwnersById(ownerId).subscribe(
      owner => this.owner = owner
    )
  }

  del(owner: Owner){
    console.log(owner);
    const msg = "¿Estas seguro/a que desea borrar a " + owner.firstName + " " + owner.lastName + "?";
    if(confirm(msg)){
      this.servicioOwner.delOwner(owner.id).subscribe(res=>{
        this.ruta.navigate(["/owners"]);
        console.log(res);
      })
    }

  }

}
