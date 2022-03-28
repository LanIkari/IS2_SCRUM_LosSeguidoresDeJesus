import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-fernando-desarrollador',
  templateUrl: './fernando-desarrollador.component.html',
  styleUrls: ['./fernando-desarrollador.component.css']
})
export class FernandoDesarrolladorComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  IraFacebook(){
    this.route.navigate([''])
  }
}
