import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';

import {registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es';

import { HttpClientModule } from '@angular/common/http';
// El segundo parametro  'es' para configurar angula en español
registerLocaleData(localEs, 'es');

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
    HttpClientModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
