import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  productos = [
    {
      id: 123456789,
      nombre: 'S7',
      marca: 'Samsung',
      precio: 500000,
      stock: 20,
      minimo: 10,
    },
    {
      id: 123456789,
      nombre: 'P20',
      marca: 'huawei',
      precio: 2300000,
      stock: 3,
      minimo: 10,
    },
  ];

  columnasAMostrar: string[] = [
    'status',
    'id',
    'nombre',
    'marca',
    'precio',
    'stock',
  ];
}
