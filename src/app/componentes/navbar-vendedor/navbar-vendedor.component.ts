import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Productos } from './../../Models/producto.model';

@Component({
  selector: 'app-navbar-vendedor',
  templateUrl: './navbar-vendedor.component.html',
  styleUrls: ['./navbar-vendedor.component.css'],
})
export class NavbarVendedorComponent implements OnInit {
  constructor(
    private loginService: AutentificacionService,
    private router: Router,
    private service: ProductosService,
  ) {}
  hidden = false;
  productitos: Productos[] = [];

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('nombre');
  }

  user: string = null;
  

  logOut() {
    this.loginService.logOut();
    this.router.navigate(['']);
  }
  perfil(){
    this.router.navigate(['perfil-vendedor']);
  }
  notificacion() {
    let promise = new Promise<number>((resolve, reject) => {
      this.service.notificacion().subscribe(
        (number) => {
          resolve(number);
        },
        (error) => {
          console.log('exploto estooo');
          reject('ERROR AL OBTENER EL STOCK');
        }
      );
    });
    return promise;
  }

}
