import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AutentificacionService } from 'src/app/services/autentificacion.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurdService implements CanActivate {
  constructor(
    private router: Router,
    private authService: AutentificacionService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = sessionStorage.getItem('rol');
    if (!this.authService.logeado()) {
      this.router.navigate(['']);
      return false;
    }
    if (token !== expectedRole && token == '1') {
      this.router.navigate(['administrador']);
    } else if (token !== expectedRole && token == '0') {
      this.router.navigate(['portalventas']);
    }

    return true;
  }
}
