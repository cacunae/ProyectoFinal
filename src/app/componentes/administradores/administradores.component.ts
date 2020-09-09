import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css'],
})
export class AdministradoresComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  administradores = [
    {
      rut: 123456789,
      nombre: 'Pedro',
      apellido: 'Smith',
      correo: 'example@exmaple.com',
    },
    {
      rut: 123456789,
      nombre: 'Pedro',
      apellido: 'Smith',
      correo: 'example@exmaple.com',
    },
    {
      rut: 123456789,
      nombre: 'Pedro',
      apellido: 'Smith',
      correo: 'example@exmaple.com',
    },
    {
      rut: 123456789,
      nombre: 'Pedro',
      apellido: 'Smith',
      correo: 'example@exmaple.com',
    },
    {
      rut: 123456789,
      nombre: 'Pedro',
      apellido: 'Smith',
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
    this.administradores.splice(i, 1);
    console.log(this.administradores);
  }
}
