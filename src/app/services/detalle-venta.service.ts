import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetallesVenta } from './../Models/detallesVenta.model';
@Injectable({
  providedIn: 'root',
})
export class DetalleVentaService {
  constructor(private http: HttpClient) {}

  apiURl = 'http://localhost:8080/api/ventaDetalle';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  agregarDetallesVentas(
    detallesDeVenta: DetallesVenta[]
  ): Observable<DetallesVenta[]> {
    return this.http.post<DetallesVenta[]>(
      this.apiURl,
      detallesDeVenta,
      this.httpOptions
    );
  }
}
