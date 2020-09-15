import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Productos } from './../../Models/producto.model';

export interface enSeleccion {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

const stock: Productos[] = [
  {
    id: 1,
    nombre: 'Galaxy S9',
    marca: 'Samsung',
    precio: 450000,
    stock: 86,
    minimo: 15,
    categoria: 'Telefonia',
  },
  {
    id: 2,
    nombre: 'P20 lite',
    marca: 'Huawei',
    precio: 520000,
    stock: 120,
    minimo: 20,
    categoria: 'Telefonia',
  },
  {
    id: 3,
    nombre: 'Macbook pro',
    marca: 'Apple',
    precio: 30000000,
    stock: 12,
    minimo: 10,
    categoria: 'Telefonia',
  },
  {
    id: 2012,
    nombre: 'Ipad',
    marca: 'Apple',
    precio: 12000000,
    stock: 7,
    minimo: 12,
    categoria: 'Tablets',
  },
];

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  constructor(private changeDetectorRefs: ChangeDetectorRef) {}

  columnasBusqueda: string[] = ['id', 'nombre', 'precio', 'stock', 'agregar'];
  dataSource = new MatTableDataSource(stock);
  //METODOS Y FUNCIONES DE LA SECCION DE BUSQUEDA DE PRODUCTOS
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  productoSeleccionado: enSeleccion = {
    id: null,
    nombre: '',
    precio: 0,
    cantidad: 1,
  };

  seleccionar(producto: Productos) {
    console.log(producto);
    let i = stock.indexOf(producto);
    console.log(i);
    this.productoSeleccionado.id = stock[i].id;
    this.productoSeleccionado.nombre = stock[i].nombre;
    this.productoSeleccionado.precio = stock[i].precio;
  }
  agregarProductoSeleccionado() {
    this.productosSeleccionados.push(this.productoSeleccionado);
    console.log(this.productosSeleccionados);
    this.obtenerTotal();
  }
  // FIN DE BUSQUEDA DE PRODUCTOS
  ngOnInit(): void {
    console.log(this.productosSeleccionados);
  }

  productosSeleccionados: enSeleccion[] = [
    {
      id: 20,
      nombre: 'Iphone 8x',
      precio: 1000000,
      cantidad: 2,
    },
    {
      id: 20,
      nombre: 'Iphone 8x',
      precio: 1000000,
      cantidad: 2,
    },
    {
      id: 20,
      nombre: 'Iphone 8x',
      precio: 1000000,
      cantidad: 2,
    },
    {
      id: 20,
      nombre: 'Iphone 8x',
      precio: 1000000,
      cantidad: 2,
    },
  ];

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
