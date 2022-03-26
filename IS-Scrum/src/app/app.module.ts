import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DefinicionesIsComponent } from './definiciones-is/definiciones-is.component';
import { CalidadIsComponent } from './calidad-is/calidad-is.component';
import { ReferenciasIsComponent } from './referencias-is/referencias-is.component';
import { EstilosCdComponent } from './estilos-cd/estilos-cd.component';
import { PatronesCdComponent } from './patrones-cd/patrones-cd.component';
import { MetodologiaScrumComponent } from './metodologia-scrum/metodologia-scrum.component';
import { QueEsScrumComponent } from './que-es-scrum/que-es-scrum.component';
import { RolesScrumComponent } from './roles-scrum/roles-scrum.component';
import { HerramientasScrumComponent } from './herramientas-scrum/herramientas-scrum.component';
import { BrandonDesarrolladorComponent } from './brandon-desarrollador/brandon-desarrollador.component';
import { SaidDesarrolladorComponent } from './said-desarrollador/said-desarrollador.component';
import { EduardoDesarrolladorComponent } from './eduardo-desarrollador/eduardo-desarrollador.component';
import { JuanDesarrolladorComponent } from './juan-desarrollador/juan-desarrollador.component';
import { FernandoDesarrolladorComponent } from './fernando-desarrollador/fernando-desarrollador.component';
import { DianaDesarrolladorComponent } from './diana-desarrollador/diana-desarrollador.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    DefinicionesIsComponent,
    CalidadIsComponent,
    ReferenciasIsComponent,
    EstilosCdComponent,
    PatronesCdComponent,
    MetodologiaScrumComponent,
    QueEsScrumComponent,
    RolesScrumComponent,
    HerramientasScrumComponent,
    BrandonDesarrolladorComponent,
    SaidDesarrolladorComponent,
    EduardoDesarrolladorComponent,
    JuanDesarrolladorComponent,
    FernandoDesarrolladorComponent,
    DianaDesarrolladorComponent
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
