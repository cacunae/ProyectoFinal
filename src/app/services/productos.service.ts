import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//interfaces
import { Productos } from '../Models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  Productos: Productos[] = [];
  apiURL = 'http://localhost:8080/api/productos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  obtenerStock(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.apiURL, this.httpOptions);
  }

  agregarProducto(Productos: Productos): Observable<Productos> {
    return this.http.post<Productos>(this.apiURL, Productos, this.httpOptions);
  }

  borrarProducto(producto: number): Observable<number> {
    let url = `${this.apiURL}/${producto}`;
    return this.http.delete<number>(url, this.httpOptions);
  }

  editarProducto(producto: number, body: Productos): Observable<{}> {
    let url = `${this.apiURL}/${producto}`;
    return this.http.put(url, body, this.httpOptions);
  }

  aumentarStockDeProducto(id: number, ingreso: number): Observable<{}> {
    let url = this.apiURL + '/stock';
    url = `${url}/${id}`;
    return this.http.put(url, ingreso, this.httpOptions);
  }
}
