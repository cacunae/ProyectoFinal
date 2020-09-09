import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  constructor() {}

  columnasAMostrar: string[] = [
    'id',
    'descripcion',
    'precio',
    'cantidad',
    'subtotal',
  ];

  total: number = 600000;

  ventas = [
    {
      id: '876555555',
      descripcion: 'celular',
      precio: '100.000',
      cantidad: 2,
      subtotal: '200.000',
    },
    {
      id: '876555555',
      descripcion: 'celular',
      precio: '100.000',
      cantidad: 2,
      subtotal: '200.000',
    },
    {
      id: '876555555',
      descripcion: 'celular',
      precio: '100.000',
      cantidad: 1,
      subtotal: '100.000',
    },
    {
      id: '876555555',
      descripcion: 'celular',
      precio: '100.000',
      cantidad: 1,
      subtotal: '100.000',
    },
  ];

  toggleOpciones() {
    if (!this.columnasAMostrar.includes('boton')) {
      this.columnasAMostrar.unshift('boton');
    } else {
      this.columnasAMostrar.splice(0, 1);
    }
  }

  ngOnInit(): void {}
}
