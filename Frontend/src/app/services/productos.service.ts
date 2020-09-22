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
    return this.http.get<Productos[]>(this.apiURL);
  }
}
