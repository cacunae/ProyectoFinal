import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-vendedor',
  templateUrl: './navbar-vendedor.component.html',
  styleUrls: ['./navbar-vendedor.component.css'],
})
export class NavbarVendedorComponent implements OnInit {
  constructor(
    private loginService: AutentificacionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logOut() {
    this.loginService.logOut();
    this.router.navigate(['']);
  }
}
