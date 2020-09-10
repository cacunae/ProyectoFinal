import { Component, OnInit } from '@angular/core';
//interface
import { Empleados } from 'src/app/Models/empleado.model';
//servicio
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css'],
})
export class AdministradoresComponent implements OnInit {
  administradores: Empleados[] = [];
  columnasAMostrar: string[] = [
    'usuario',
    'nombre',
    'apellido',
    'correo',
    'opciones',
  ];

  constructor(private service: AdministradorService) {}

  ngOnInit() {
    this.service
      .obtenerAdministradores()
      .subscribe((administradores) => (this.administradores = administradores));
    console.log(this.administradores);
  }
  administrador: Empleados = {
    usuario: '',
    nombre: '',
    apellido: '',
    correo: '',
    contrasenha: '',
    esAdmin: 1,
  };

  agregarAdministrador() {
    console.log(this.administrador);
    this.service
      .agregarAdministrador(this.administrador)
      .subscribe((administrador) =>
        this.administradores.push(this.administrador)
      );
    this.ngOnInit();
  }
}
