import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
//interfaces
import { Empleados } from 'src/app/Models/empleado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdministradorService {
  constructor(private http: HttpClient) {}

  Administradores: Empleados[] = [];
  apiURL = 'http://localhost:8080/api/administrador';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  obtenerAdministradores(): Observable<Empleados[]> {
    return this.http.get<Empleados[]>(this.apiURL);
  }

  agregarAdministrador(administrador: Empleados): Observable<Empleados> {
    return this.http.post<Empleados>(
      this.apiURL,
      administrador,
      this.httpOptions
    );
  }

  borrarAdministrador(usuario: string): Observable<string> {
    let url = `${this.apiURL}/${usuario}`;
    return this.http.delete<string>(url, this.httpOptions);
  }

  editarAdministrador(usuario: string, body: Empleados): Observable<{}> {
    let url = `${this.apiURL}/${usuario}`;
    return this.http.put(url, body, this.httpOptions);
  }

}
