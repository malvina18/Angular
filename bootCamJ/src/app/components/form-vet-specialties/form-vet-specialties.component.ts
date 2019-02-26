import { Component, OnInit } from '@angular/core';
import { Specialties } from 'src/app/models/specialties';
import { SpecialtiesService } from 'src/app/servicios/specialties.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-vet-specialties',
  templateUrl: './form-vet-specialties.component.html',
  styleUrls: ['./form-vet-specialties.component.css']
})
export class FormVetSpecialtiesComponent implements OnInit {

  public specialties: Specialties;
  public textoBoton: string;
  public error;

  constructor(private ServicioSpecialties : SpecialtiesService, private ruta: Router, private route: ActivatedRoute) { 
    this.specialties = new Specialties();
    this.textoBoton = "Añadir especialidad"
  }

  ngOnInit() {
    const specialtiesId = this.route.snapshot.params["id"];
    console.log(specialtiesId);
    if(specialtiesId != -1){
      this.textoBoton = "Modificar animal";
      this.ServicioSpecialties.getSpecialtiesById(specialtiesId).subscribe(
        specialties => this.specialties = specialties
        
      );
      console.log(this.specialties);
    }
  }

  onSubmit(specialties : Specialties){
    console.log(specialties);

    if (this.specialties.id){
      specialties.id=this.specialties.id;
      this.ServicioSpecialties.modSpecialties(specialties).subscribe(
        resp=>{
            this.ruta.navigate(['/vet-specialties']); 
        },
        error=>console.log(error)
      );
    }else{
      this.ServicioSpecialties.addSpecialties(specialties).subscribe(
        resp=>{
  
            alert("Especialidad añadida correctamente");
            this.ruta.navigate(['/vet-specialties']);
  
        } 
      )
    }
   
  }
}

