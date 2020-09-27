import { Component, OnInit } from '@angular/core';

import { ProductosService } from 'src/app/services/productos.service';
import { Productos } from './../../Models/producto.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  ngOnInit() {
    this.actualizarProductos();
  }

  productitos: Productos[] = [];
  dataSource = new MatTableDataSource();
  columnasAMostrar: string[] = [
    'id',
    'nombre',
    'marca',
    'precio',
    'stock',
    'categoria',
    'opciones',
  ];

  index: number = null;
  guardar(i: number) {
    this.index = i;
    console.log(this.index);
    console.log(this.productitos[i].id);
  }
  constructor(private service: ProductosService) {}

  productos: Productos = {
    id: 0,
    nombre: '',
    marca: '',
    precio: 0,
    stock: 0,
    minimo: 0,
    categoria: '',
  };

  clear() {
    this.productos = {
      id: 0,
      nombre: '',
      marca: '',
      precio: 0,
      stock: 0,
      minimo: 0,
      categoria: '',
    };
  }

  agregarProducto() {
    console.log(this.productos);
    this.service.agregarProducto(this.productos).subscribe(
      (productos) => this.productitos.push(this.productos),
      (error) => {
        if (error.status == 409) {
          alert('Este usuario ya esta registrado');
        } else if (error.status == 411) {
          alert('Este correo ya esta registrado');
        }
      }
    );
    this.obtenerProductos();
    this.actualizarProductos();
    this.clear();
  }

  obtenerProductos() {
    let promise = new Promise<Productos[]>((resolve, reject) => {
      this.service.obtenerStock().subscribe(
        (productos) => {
          resolve(productos);
        },
        (error) => {
          console.log('exploto estooo');
          reject('ERROR AL OBTENER EL STOCK');
        }
      );
    });
    return promise;
  }
  actualizarProductos() {
    this.obtenerProductos().then((productos) => {
      console.log('productos obtenidos', productos);
      this.productitos = productos;
      this.dataSource.data = this.productitos;
    });
  }

  onKey(event: Event) {
    console.log(this.busqueda);
    console.log(this.filtro);

    if (this.busqueda == '') {
      this.dataSource.data = this.dataSource.data;
    }
    this.dataSource.data = this.productitos.filter((producto) =>
      producto[this.filtro].includes(this.busqueda)
    );
  }

  busqueda: string = '';
  filtro: string = '';

  cambios: Productos = {
    id: 0,
    nombre: '',
    marca: '',
    precio: 0,
    stock: 0,
    minimo: 0,
    categoria: '',
  };

  editarProducto(i: number): void {
    this.index = i;
    let producto = this.productitos[i].id;
    this.cambios.id = this.productitos[i].id;
    this.cambios.nombre = this.productitos[i].nombre;
    this.cambios.marca = this.productitos[i].marca;
    this.cambios.precio = this.productitos[i].precio;
    this.cambios.stock = this.productitos[i].stock;
    this.cambios.minimo = this.productitos[i].minimo;
    this.cambios.categoria = this.productitos[i].categoria;
    console.log(this.cambios);
  }

  confirmarCambio() {
    let producto = this.productitos[this.index].id;
    console.log(producto);
    this.service
      .editarProducto(this.productitos[this.index].id, this.cambios)
      .subscribe((resp) => console.log('cambios realizados'));
    this.obtenerProductos();
    this.actualizarProductos();
  }

  eliminarProducto(i: number) {
    this.productitos[i].id;
    console.log(this.productitos[i].id);
    this.service.borrarProducto(this.productitos[i].id).subscribe();
    this.obtenerProductos();
    this.actualizarProductos();
  }

  nombre: string;
  stockActual: number;
  ingreso: number;
  id: number;
  aumentarStock(i: number) {
    this.nombre = this.productitos[i].nombre;
    this.stockActual = this.productitos[i].stock;
    this.ingreso = 0;
    this.id = this.productitos[i].id;
  }
  confirmarAumentoDeStock() {
    this.service.aumentarStockDeProducto(this.id, this.ingreso).subscribe();

    this.obtenerProductos();
    this.actualizarProductos();
  }
}
