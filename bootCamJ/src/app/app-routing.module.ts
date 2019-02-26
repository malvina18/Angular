import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OwnersComponent } from './components/owners/owners.component';
import { VetsComponent } from './components/vets/vets.component';
import { DetailsOwnerComponent } from './components/details-owner/details-owner.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { VetSpecialtiesComponent } from './components/vet-specialties/vet-specialties.component';
import { TypesComponent } from './components/types/types.component';
import { FormTypesComponent } from './components/form-types/form-types.component';
import { FormVetSpecialtiesComponent } from './components/form-vet-specialties/form-vet-specialties.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'owners',
    component: OwnersComponent
  },
  {
    path: 'vets',
    component: VetsComponent
  },
  {
    path: 'owners/:id',
    component: DetailsOwnerComponent
  },
  {
    path: 'owners-add/:id',
    component: FormOwnerComponent
  },
  {
    path: 'vet-specialties',
    component: VetSpecialtiesComponent
  },
  {
    path: 'types',
    component: TypesComponent
  },
  {
    path: 'types-add/:id',
    component: FormTypesComponent
  },
  {
    path: 'specialties-add/:id',
    component: FormVetSpecialtiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
