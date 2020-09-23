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
  admin() {
    this.router.navigate(['login-admin']);
  }

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
    console.log(this.empleado.esAdmin);
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
          this.redireccionar();
        } else {
          alert('DATOS INVALIDOS');
        }
      },
      (error) => alert('error')
    );
  }

  logIn() {
    this.validarLogin();
    this.redireccionar();
  }
}
