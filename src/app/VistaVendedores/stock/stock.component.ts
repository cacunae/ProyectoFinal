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
      descripcion: 'hola',
      stock: 20,
    },
    {
      id: 123456789,
      nombre: 'P20',
      marca: 'huawei',
      descripcion: 'chao',
      stock: 3,
    },
  ];

  columnasAMostrar: string[] = [
    'status',
    'id',
    'nombre',
    'marca',
    'descripcion',
    'stock',
  ];
}
