import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Productos } from './../../Models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

export interface enSeleccion {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  constructor(private service: ProductosService) {}

  ngOnInit(): void {
    console.log('Obteniendo stock');
    this.obtenerStock().then((productos) => {
      console.log('productos obtenidos', productos);
      this.stock = productos;
      this.dataSource.data = this.stock;
      console.log(this.dataSource);
    });
  }

  stock: any;
  dataSource = new MatTableDataSource();
  columnasBusqueda: string[] = [
    'id',
    'nombre',
    'marca',
    'precio',
    'stock',
    'agregar',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //METODOS Y FUNCIONES DE LA SECCION DE BUSQUEDA DE PRODUCTOS
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  productoSeleccionado: enSeleccion = {
    id: null,
    nombre: '',
    precio: 0,
    cantidad: 1,
  };

  seleccionar(producto: Productos) {
    console.log(producto);
    console.log(this.stock);
    let i = this.stock.indexOf(producto);
    console.log(i);
    this.productoSeleccionado.id = this.stock[i].id;
    this.productoSeleccionado.nombre = this.stock[i].nombre;
    this.productoSeleccionado.precio = this.stock[i].precio;
  }
  agregarProductoSeleccionado() {
    this.productosSeleccionados.push(this.productoSeleccionado);
    console.log(this.productosSeleccionados);
    this.obtenerTotal();
  }
  //SERVICIOS
  obtenerStock() {
    let promise = new Promise((resolve, reject) => {
      this.service.obtenerStock().subscribe(
        (producto) => {
          resolve(producto);
        },
        (error) => {
          console.log('EXPLOTO ESTO');
          reject('ERROR AL OBTENER EL STOCK');
        }
      );
      console.log(this.stock);
    });
    return promise;
  }

  // FIN DE BUSQUEDA DE PRODUCTOS

  productosSeleccionados: enSeleccion[] = [];

  columnasFactura: string[] = [
    'id',
    'nombre',
    'precio',
    'cantidad',
    'subtotal',
  ];

  total = 0;
  obtenerTotal() {
    let i: number = 0;
    for (i = 0; i < this.productosSeleccionados.length; i++) {
      this.total +=
        this.productosSeleccionados[i].precio *
        this.productosSeleccionados[i].cantidad;
    }
  }
}
