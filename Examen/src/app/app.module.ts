import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListaDetalleComponent } from './lista-detalle/lista-detalle.component';
import { AnadeDetalleComponent } from './anade-detalle/anade-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListaDetalleComponent,
    AnadeDetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
