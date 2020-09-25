import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
//INTERFACES
import { Productos } from 'src/app/Models/producto.model';
//SERVICIOS
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  constructor(private ProductosService: ProductosService) {}

  busqueda: string = '';
  filtro: string = '';


  ngOnInit(): void {
    this.actualizarStock();
    console.log('Obteniendo productos');
    this.obtenerStock().then((productos) => {
      console.log('productos obtenidos', productos);
      this.productitos = productos;
      this.stockDataSource.data = this.productitos;
    });
  }
  productitos: Productos[] = [];
  stock = [];
  stockDataSource = new MatTableDataSource();

  columnasAMostrar: string[] = [
    'status',
    'id',
    'nombre',
    'marca',
    'precio',
    'stock',
  ];

  obtenerStock() {
    let promise = new Promise<Productos[]>((resolve, reject) => {
      this.ProductosService.obtenerStock().subscribe(
        (producto) => {
          resolve(producto);
        },
        (error) => {
          console.log('exploto estooo');
          reject('ERROR AL OBTENER EL STOCK');
        }
      );
    });
    return promise;
  }
  actualizarStock() {
    console.log('Obteniendo stock');
    this.obtenerStock().then((productos) => {
      console.log('productos obtenidos', productos);
      this.stock = productos;
      this.stockDataSource.data = this.stock;
      console.log(this.stockDataSource);
    });
  }

  onKey(event: Event) {
    console.log(this.busqueda);
    console.log(this.filtro);
    if (this.busqueda == '') {
      this.stockDataSource.data = this.stockDataSource.data;
    }
    this.stockDataSource.data = this.productitos.filter((producto) =>
      producto[this.filtro].includes(this.busqueda)
    );
  }
}
