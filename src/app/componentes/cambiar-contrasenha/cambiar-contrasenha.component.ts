import { Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/app/services/vendedor.service';
import { AdministradorService } from 'src/app/services/administrador.service';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/services/autentificacion.service';

@Component({
  selector: 'app-cambiar-contrasenha',
  templateUrl: './cambiar-contrasenha.component.html',
  styleUrls: ['./cambiar-contrasenha.component.css'],
})
export class CambiarContrasenhaComponent implements OnInit {
  constructor(
    private autentificacion: AutentificacionService,
    private administradorService: AdministradorService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  hide = true;

  user: string = '';
  password: string = '';

  changePassword() {
    this.administradorService
      .cambiarContrasenha(this.user, this.password)
      .subscribe();
    if (sessionStorage.getItem('usuario') !== null) {
      this.autentificacion.logOut();
    }
    this.router.navigate(['login']);
  }
}
