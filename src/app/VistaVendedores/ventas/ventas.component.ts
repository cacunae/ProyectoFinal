import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})

export class VentasComponent implements OnInit {
  constructor() { }

  columnasAMostrar: string[] = [
    'id',
    'descripcion',
    'precio',
    'subtotal',
    'input',
    'boton',
  ];
  ventas = [
    {
      id: '876555555',
      descripcion: 'celular',
      precio: '100.000',
      subtotal: '200.000',
    },
    {
      id: '876555555',
      descripcion: 'celular',
      precio: '100.000',
      subtotal: '200.000',
    },
    {
      id: '876555555',
      descripcion: 'celular',
      precio: '100.000',
      subtotal: '200.000',
    },
    {
      id: '876555555',
      descripcion: 'celular',
      precio: '100.000',
      subtotal: '200.000',
    },
  ];

  ngOnInit(): void { }
} 
