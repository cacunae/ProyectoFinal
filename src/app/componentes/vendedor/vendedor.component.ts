import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css'],
})
export class VendedorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  estudiantes = [
    {
      rut: 123456789,
      nombre: 'Pedro',
      apellido: 'Luih',
      correo: 'example@exmaple.com',
    },
    {
      rut: 123456789,
      nombre: 'Pedro',
      apellido: 'Luih',
      correo: 'example@exmaple.com',
    },
    {
      rut: 123456789,
      nombre: 'Pedro',
      apellido: 'Luih',
      correo: 'example@exmaple.com',
    },
    {
      rut: 123456789,
      nombre: 'Pedro',
      apellido: 'Luih',
      correo: 'example@exmaple.com',
    },
    {
      rut: 123456789,
      nombre: 'Pedro',
      apellido: 'Luih',
      correo: 'example@exmaple.com',
    },
  ];

  columnasAMostrar: string[] = [
    'rut',
    'nombre',
    'apellido',
    'correo',
    'opciones',
  ];

  eliminar(i: number) {
    this.estudiantes.splice(i, 1);
    console.log(this.estudiantes);
  }
}
