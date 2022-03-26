import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {DefinicionesIsComponent} from "./definiciones-is/definiciones-is.component";
import {CalidadIsComponent} from "./calidad-is/calidad-is.component";
import {ReferenciasIsComponent} from "./referencias-is/referencias-is.component";
import {EstilosCdComponent} from "./estilos-cd/estilos-cd.component";
import {PatronesCdComponent} from "./patrones-cd/patrones-cd.component";
import {QueEsScrumComponent} from "./que-es-scrum/que-es-scrum.component";
import {MetodologiaScrumComponent} from "./metodologia-scrum/metodologia-scrum.component";
import {RolesScrumComponent} from "./roles-scrum/roles-scrum.component";
import {BrandonDesarrolladorComponent} from "./brandon-desarrollador/brandon-desarrollador.component";
import {SaidDesarrolladorComponent} from "./said-desarrollador/said-desarrollador.component";
import {EduardoDesarrolladorComponent} from "./eduardo-desarrollador/eduardo-desarrollador.component";
import {JuanDesarrolladorComponent} from "./juan-desarrollador/juan-desarrollador.component";
import {FernandoDesarrolladorComponent} from "./fernando-desarrollador/fernando-desarrollador.component";
import {DianaDesarrolladorComponent} from "./diana-desarrollador/diana-desarrollador.component";


const routes: Routes = [
  {path: '' ,component: IndexComponent},
  {path: 'index',component: IndexComponent},
  {path: 'definiciones',component: DefinicionesIsComponent},
  {path: 'calidad',component: CalidadIsComponent},
  {path: 'referencias',component: ReferenciasIsComponent},
  {path: 'estilos',component: EstilosCdComponent},
  {path: 'patrones',component: PatronesCdComponent},
  {path: 'metodologia',component: MetodologiaScrumComponent},
  {path: 'quees',component: QueEsScrumComponent},
  {path: 'roles',component: RolesScrumComponent},
  {path: 'herramientas',component: RolesScrumComponent},
  {path: 'brandon',component: BrandonDesarrolladorComponent},
  {path: 'said',component: SaidDesarrolladorComponent},
  {path: 'eduardo',component: EduardoDesarrolladorComponent},
  {path: 'juan',component: JuanDesarrolladorComponent},
  {path: 'fernando',component: FernandoDesarrolladorComponent},
  {path: 'diana',component: DianaDesarrolladorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
