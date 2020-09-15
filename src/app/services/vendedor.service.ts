import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
//interfaces
import { Empleados } from 'src/app/Models/empleado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  constructor(private http: HttpClient) {}

  Vendedor: Empleados[] = [];
  apiURL = 'http://localhost:8080/api/vendedor';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  obtenerVendedores(): Observable<Empleados[]> {
    return this.http.get<Empleados[]>(this.apiURL);
  }

  agregarVendedor(Vendedor: Empleados): Observable<Empleados> {
    return this.http.post<Empleados>(this.apiURL, Vendedor);
  }

  borrarVendedor(usuario: string): Observable<string> {
    this.apiURL = `${this.apiURL}/${usuario}`;
    return this.http.delete<string>(this.apiURL, this.httpOptions);
  }

  editarVendedor(usuario: string, body: Empleados): Observable<{}> {
    let url = `${this.apiURL}/${usuario}`;
    return this.http.put(url, body, this.httpOptions);
  }
}

