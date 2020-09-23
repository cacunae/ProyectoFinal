import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleados } from '../Models/empleado.model';

@Injectable({
  providedIn: 'root',
})
export class AutentificacionService {
  constructor(private http: HttpClient) {}

  apiURL = 'http://localhost:8080/api/login';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  autentificar(usuario: Empleados) {
    return this.http.post<Empleados>(this.apiURL, usuario, this.httpOptions);
  }

  logeado() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
