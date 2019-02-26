import { Component, OnInit } from '@angular/core';
import { Pettype } from 'src/app/models/pettype';
import { TypesService } from 'src/app/servicios/types.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-types',
  templateUrl: './form-types.component.html',
  styleUrls: ['./form-types.component.css']
})
export class FormTypesComponent implements OnInit {

  public types: Pettype;
  public textoBoton: string;
  public error;

  constructor(private ServicioTypes : TypesService, private ruta: Router, private route: ActivatedRoute) { 
    this.types = new Pettype();
    this.textoBoton = "Añadir animal"
  }
  
  ngOnInit() {
    const typesId = this.route.snapshot.params["id"];
    console.log(typesId);
    if(typesId != -1){
      this.textoBoton = "Modificar animal";
      this.ServicioTypes.getTypeById(typesId).subscribe(
        types => this.types = types
        
      );
      console.log(this.types);
    }
  }

  onSubmit(types : Pettype){
    console.log(types);

    if (this.types.id){
      types.id=this.types.id;
      this.ServicioTypes.modPettype(types).subscribe(
        resp=>{
            this.ruta.navigate(['/types']); 
        },
        error=>console.log(error)
      );
    }else{
      this.ServicioTypes.addPettype(types).subscribe(
        resp=>{
  
            alert("Animal añadido correctamente");
            this.ruta.navigate(['/types']);
  
        } 
      )
    }
   
  }
}
