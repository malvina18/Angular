import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Specialties } from '../models/specialties';

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {
url: string = 'http://localhost/ajax/petclinic/servicios.php';
  constructor(private http: HttpClient) { }

  getSpecialties() {
    const pa = JSON.stringify({
      accion: 'ListarSpecialties'
    });
    return this.http.post<any>(this.url, pa);
  }

  delSpecialties(id: number){
    const pa = JSON.stringify({
      accion: 'BorraSpecialty',
      id: id
    });
    return this.http.post<any>(this.url, pa);
  }

  modSpecialties(specialties: Specialties){
    const pa = JSON.stringify({
      accion: 'ModificaSpecialty',
      specialty: specialties
    });
    console.log('toy en el servicio', pa);
    return this.http.post<any>(this.url, pa);
  }

  getSpecialtiesById(id){
    const pa = JSON.stringify({
      accion: 'ObtenerTypeId',
      id: id
    });
    return this.http.post<any>(this.url, pa);
  }

  addSpecialties(specialties : Specialties) {
    const pa = JSON.stringify({
      accion: 'AnadeSpecialty',
      specialty: specialties
    });
    return this.http.post<any>(this.url, pa);
  }
}
