import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from './../Models/venta.model';
import { Empleados } from '../Models/empleado.model';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  constructor(private http: HttpClient) {}

  Ventas: Venta[] = [];
  apiURL = 'http://localhost:8080/api/venta';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  agregarVenta(nuevaVenta: Venta): Observable<Venta> {
    return this.http.post<Venta>(this.apiURL, nuevaVenta, this.httpOptions);
  }

  id: number;

  obtenerIdVenta(idVendedor: string): Observable<Venta> {
    let url = `${this.apiURL}/${idVendedor}`;
    return this.http.get<Venta>(url, this.httpOptions);
  }
}
