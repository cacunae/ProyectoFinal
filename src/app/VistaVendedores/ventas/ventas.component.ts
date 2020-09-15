import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Productos } from './../../Models/producto.model';

export interface ProductosF {
  id: number;
  nombre: string;
  marca: string;
  precio: number;
  cantidad: number;
  subtotal: number;
}

const ELEMENT_DATA: Productos[] = [
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
    id: 4,
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
  constructor() {}

  columnasBusqueda: string[] = ['id', 'nombre', 'precio', 'stock', 'agregar'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {}
}
