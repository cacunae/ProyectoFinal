import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-administrador',
  templateUrl: './navbar-administrador.component.html',
  styleUrls: ['./navbar-administrador.component.css'],
})
export class NavbarAdministradorComponent implements OnInit {
  constructor(
    private loginService: AutentificacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = sessionStorage.getItem('nombre');
  }

  user: string = null;

  logOut() {
    this.loginService.logOut();
    this.router.navigate(['']);
  }
  miPerfil(){
    this.router.navigate(['mi-perfil-admin'])
  }
}
