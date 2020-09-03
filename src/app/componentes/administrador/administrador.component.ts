import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  productos(){
    this.router.navigate(['productos'])
  }
  administradores(){
    this.router.navigate(['administradores'])
  }
  vendedores(){
    this.router.navigate(["vendedores"])
  }


}
