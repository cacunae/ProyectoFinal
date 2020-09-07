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
      usuario: 123456789,
      nombre: 'Pedro',
      apellido: 'Smith',
      correo: 'example@exmaple.com',
    },
    {
      usuario: 123456789,
      nombre: 'Pedro',
      apellido: 'Smith',
      correo: 'example@exmaple.com',
    },
    {
      usuario: 123456789,
      nombre: 'Pedro',
      apellido: 'Smith',
      correo: 'example@exmaple.com',
    },
    {
      usuario: 123456789,
      nombre: 'Pedro',
      apellido: 'Smith',
      correo: 'example@exmaple.com',
    },
    {
      usuario: 123456789,
      nombre: 'Pedro',
      apellido: 'Smith',
      correo: 'example@exmaple.com',
    },
  ];

  columnasAMostrar: string[] = [
    'usuario',
    'nombre',
    'apellido',
    'correo',
    'opciones',
  ];
}
