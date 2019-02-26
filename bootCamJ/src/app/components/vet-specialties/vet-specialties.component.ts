import {Component, OnInit} from '@angular/core';
import {Specialties} from 'src/app/models/specialties';
import {SpecialtiesService} from 'src/app/servicios/specialties.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vet-specialties',
  templateUrl: './vet-specialties.component.html',
  styleUrls: ['./vet-specialties.component.css']
})
export class VetSpecialtiesComponent implements OnInit {

  public specialties: Array<Specialties>;
  public confirmacion: Boolean = false;
  // este atributo lo paso a  vet-specialities
  // <app-specialty-add (onNew)="onNewSpecialty($event)"[specialty]="editado"></app-specialty-add>
  public editado: Specialties;

  constructor(private servicioSpecialties: SpecialtiesService, private ruta: Router) {
  }

  ngOnInit() {
    this.servicioSpecialties.getSpecialties().subscribe(res => {
      this.specialties = res;
      console.log(res);
    });
  }

  del(specialties: Specialties) {
    console.log(specialties);
    const msg = '¿Estas seguro/a que desea borrar a ' + specialties.name + '?';
    if (confirm(msg)) {
      this.servicioSpecialties.delSpecialties(specialties.id).subscribe(resp => {

        if (resp.result === 'OK') {
          this.specialties = this.specialties.filter(tipo => tipo.id != specialties.id);
        } else {
          alert('Ha habido un error al eliminar');
        }
      });
    }

  }

  /*mod(specialtiesId) {
    console.log(specialtiesId);
    this.ruta.navigate(['specialties-add', specialtiesId]);
  }*/

  mostrarAnadir() {
    this.confirmacion = !this.confirmacion;
    // para limpiar para añadir
    this.editado = new Specialties();
  }

  onNewSpecialty(new_Specialty: Specialties) {
    if (new_Specialty) {
      this.specialties.push(new_Specialty);
    }
    this.mostrarAnadir();
  }

  EditarEspecialidad(specialties: Specialties) {
    console.log(specialties);
    alert('aki estoy modificando');
    this.editado = specialties;
    this.confirmacion = !this.confirmacion;
  }
}
