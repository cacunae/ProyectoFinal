import { Component, OnInit } from '@angular/core';
import { interfas } from './interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  constructor() {}

  columnasAMostrar: string[] = [
    'id',
    'nombre',
    'marca',
    'descripcion',
    'opciones',
  ];

  productos = [
    {
      id: '123',
      nombre: 'iphone',
      marca: 'apple',
      descripcion: 'un telefono muy caro',
    },
    {
      id: '321',
      nombre: 'moto g8',
      marca: 'motorola',
      descripcion: 'un telefono',
    },
  ];

  eliminar(i: number) {
    this.productos.splice(i, 1);
    console.log(this.productos);
  }

  ngOnInit(): void {}
}
