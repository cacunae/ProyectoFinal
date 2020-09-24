import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Empleados } from 'src/app/Models/empleado.model';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css'],
})
export class LoginUsuarioComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: AutentificacionService
  ) {}

  ngOnInit(): void {}

  tag: string = 'Vendedor';
  empleado: Empleados = {
    usuario: '',
    contrasenha: '',
    esAdmin: 0,
  } as Empleados;

  onChange() {
    if (this.empleado.esAdmin == 0) {
      this.empleado.esAdmin = 1;
      this.tag = 'Administrador';
    } else {
      this.empleado.esAdmin = 0;
      this.tag = 'Vendedor';
    }
  }

  redireccionar() {
    if (this.empleado.esAdmin == 1) {
      this.router.navigate(['administrador']);
    } else if (this.empleado.esAdmin == 0) {
      this.router.navigate(['portalventas']);
    }
  }

  validarLogin() {
    let temp = this.loginService.autentificar(this.empleado).subscribe(
      (resp) => {
        if (resp) {
          sessionStorage.setItem('usuario', resp.usuario);
          sessionStorage.setItem('nombre', resp.nombre);
          sessionStorage.setItem('apellido', resp.apellido);
          sessionStorage.setItem('rol', resp.esAdmin.toString());

          this.redireccionar();
        } else {
          alert('DATOS INVALIDOS');
        }
      },
      (error) => {
        if (error.status == 409) {
          alert('Datos Invalidos');
        }
      }
    );
  }

  logIn() {
    this.validarLogin();
    this.redireccionar();
  }
}
