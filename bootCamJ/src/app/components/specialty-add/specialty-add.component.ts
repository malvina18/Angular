import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Specialties} from 'src/app/models/specialties';
import {SpecialtiesService} from 'src/app/servicios/specialties.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-specialty-add',
  templateUrl: './specialty-add.component.html',
  styleUrls: ['./specialty-add.component.css']
})
export class SpecialtyAddComponent implements OnInit {
  public confirmacion: Boolean;
  // public specialty: Specialties;
  // parametro de salida
  @Output() onNew = new EventEmitter<Specialties>();
  // PARAMETRO de entrada para cuando modifico
  @Input() specialty: Specialties;

  constructor(private ServicioSpecialties: SpecialtiesService, private ruta: Router, private route: ActivatedRoute) {
    //  this.specialty = new Specialties();
  }

  ngOnInit() {
    if (!this.specialty) {
      this.specialty = <Specialties>{};
    }
  }


  onSubmit(specialty: Specialties) {
    console.log(specialty);
    if (specialty.id) {
      // es una modificacion
      this.ServicioSpecialties.modSpecialties(specialty).subscribe(
        new_specialty => {
          // console.log(new_specialty);
          alert('Especialidad modificada correctamente');
          // se elimina no se necesita
          this.onNew.emit(null);
          this.specialty = new_specialty;
        });
    } else {
      // es una insercion: el id es indefinido
      this.ServicioSpecialties.addSpecialties(specialty).subscribe(
        new_specialty => {
          console.log(new_specialty);
          alert('Especialidad añadida correctamente');
          this.onNew.emit(this.specialty);
          this.specialty = new_specialty;
        });
    }
  }

}

