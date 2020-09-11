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
    'precio',
    'stock',
    'categoria',
    'opciones',
  ];

  productos = [
    {
      id: '123',
      nombre: 'iphone',
      marca: 'apple',
      precio: 900000,
      stock: 50,
      categoria: 'Telefonia',
    },
    {
      id: '123',
      nombre: 'Moto g6 play',
      marca: 'Motorola',
      precio: 270000,
      stock: 25,
      categoria: 'Telefonia',
    },
  ];

  busquedafiltrada = [
    {
      id: '123',
      nombre: 'iphone',
      marca: 'apple',
      precio: 900000,
      stock: 50,
      categoria: 'Telefonia',
    },
    {
      id: '123',
      nombre: 'Moto g6 play',
      marca: 'Motorola',
      precio: 270000,
      stock: 25,
      categoria: 'Telefonia',
    },
  ];

  ngOnInit(): void {}

  onKey(event) {
    console.log(this.busqueda);
    console.log(this.filtro);

    this.busquedafiltrada = this.busquedafiltrada.filter((producto) =>
      this.busquedafiltrada[this.filtro].includes(this.busqueda)
    );
    if (this.busqueda == '') this.busquedafiltrada = this.productos;

    //console.log(
    //this.productos.filter((producto) =>
    // producto[this.filtro].includes(this.busqueda)
    // )
    //);
  }
  busqueda: string = '';
  filtro: string = '';
}
