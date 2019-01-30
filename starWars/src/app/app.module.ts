import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PlanetaComponent } from './planeta/planeta.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PlanetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
