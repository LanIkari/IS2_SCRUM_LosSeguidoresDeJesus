import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeoriaBasicaISComponent } from './teoria-basica-is/teoria-basica-is.component';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { ScrumComponent } from './scrum/scrum.component';
import { InformacionDesarrolladoresComponent } from './informacion-desarrolladores/informacion-desarrolladores.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TeoriaBasicaISComponent,
    ConceptosComponent,
    ScrumComponent,
    InformacionDesarrolladoresComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
