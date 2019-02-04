import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormSearchComponent } from './search/form-search/form-search.component';
import { ListownerComponent } from './search/list_owners/listowner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSearchComponent,
    ListownerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
