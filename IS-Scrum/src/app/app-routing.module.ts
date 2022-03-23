import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { IndexComponent } from './index/index.component';
import { InformacionDesarrolladoresComponent } from './informacion-desarrolladores/informacion-desarrolladores.component';
import { ScrumComponent } from './scrum/scrum.component';
import { TeoriaBasicaISComponent } from './teoria-basica-is/teoria-basica-is.component';

const routes: Routes = [
  {path: '' ,component: IndexComponent},
  {path: 'index',component: IndexComponent},
  {path: 'teoriabasicais',component: TeoriaBasicaISComponent},
  {path: 'conceptos',component: ConceptosComponent},
  {path: 'scrum',component: ScrumComponent},
  {path: 'informaciondesarrolladores',component: InformacionDesarrolladoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
