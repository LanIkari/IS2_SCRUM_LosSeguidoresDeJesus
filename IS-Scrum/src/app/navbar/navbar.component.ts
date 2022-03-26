import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }

  irADefiniciones() {
    this.route.navigate(['definiciones']);
  }

  irACalidad(){
    this.route.navigate(['calidad']);
  }

  irAReferencias(){
    this.route.navigate(['referencias']);
  }

  irAEstilos(){
    this.route.navigate(['estilos']);
  }

  irAPatrones(){
    this.route.navigate(['patrones']);
  }

  irAMetodologia(){
    this.route.navigate(['metodologia']);
  }

  irAScrum(){
    this.route.navigate(['que-es-scrum']);
  }

  irARoles(){
    this.route.navigate(['roles']);
  }

  irAHerramientas(){
    this.route.navigate(['herramientas']);
  }

  irABrandon(){
    this.route.navigate(['brandon']);
  }

  irASaid(){
    this.route.navigate(['said']);
  }

  irAEduardo(){
    this.route.navigate(['eduardo']);
  }

  irAJuan(){
    this.route.navigate(['juan']);
  }

  irAFernando(){
    this.route.navigate(['fernando']);
  }

  irADiana(){
    this.route.navigate(['diana']);
  }
}
