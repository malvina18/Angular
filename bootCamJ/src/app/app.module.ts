import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OwnersComponent } from './components/owners/owners.component';
import { VetsComponent } from './components/vets/vets.component';
import { DetailsOwnerComponent } from './components/details-owner/details-owner.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VetSpecialtiesComponent } from './components/vet-specialties/vet-specialties.component';
import { TypesComponent } from './components/types/types.component';
import { FormTypesComponent } from './components/form-types/form-types.component';
import { FormVetSpecialtiesComponent } from './components/form-vet-specialties/form-vet-specialties.component';
import { SpecialtyAddComponent } from './components/specialty-add/specialty-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OwnersComponent,
    VetsComponent,
    DetailsOwnerComponent,
    FormOwnerComponent,
    VetSpecialtiesComponent,
    TypesComponent,
    FormTypesComponent,
    FormVetSpecialtiesComponent,
    SpecialtyAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
