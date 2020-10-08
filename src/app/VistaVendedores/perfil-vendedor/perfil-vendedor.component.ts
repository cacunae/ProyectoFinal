import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/services/autentificacion.service';

@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.component.html',
  styleUrls: ['./perfil-vendedor.component.css'],
})
export class PerfilVendedorComponent implements OnInit {
  constructor(
    private loginService: AutentificacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = sessionStorage.getItem('nombre');
    this.id = sessionStorage.getItem('usuario');
    this.apellido = sessionStorage.getItem('apellido');
    this.correo = sessionStorage.getItem('correo');
  }
  user: string = null;
  id: string = null;
  apellido: string = null;
  correo: string = null;

  recuperarPassword() {
    this.router.navigate(['cambiar-password']);
  }
}
