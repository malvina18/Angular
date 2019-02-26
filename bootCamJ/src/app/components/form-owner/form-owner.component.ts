import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { OwnerService } from 'src/app/servicios/owner.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {

  public owner: Owner;
  public textoBoton: string;
  public error;

  constructor(private ServicioOwner : OwnerService, private ruta: Router, private route: ActivatedRoute) {
    this.owner = new Owner();
    this.textoBoton = "Añadir Propietario"
   }

  ngOnInit() {
    const ownerId = this.route.snapshot.params["id"];
    if(ownerId != -1){
      this.textoBoton = "Modificar Propietario";
      this.ServicioOwner.getOwnersById(ownerId).subscribe(
        owner => this.owner = owner
      );
    }
  }

  onSubmit(owner : Owner){
    console.log(owner);

    if (this.owner.id){
      owner.id=this.owner.id;
      this.ServicioOwner.modOwner(owner).subscribe(
        resp=>{
            this.ruta.navigate(['/owners']); 
        },
        error=>console.log(error)
      );
    }else{
      this.ServicioOwner.addOwner(owner).subscribe(
        resp=>{
  
          if(resp.result == "OK"){
            alert("Propietario añadido correctamente");
            this.ruta.navigate(['/owners']);
          }else{
            alert("Error al añadir");
          }
          
        },
        error=>console.log(error)
      );
    }
   
  }

}
