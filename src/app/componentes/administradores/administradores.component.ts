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
    this.clear();
  }
  administrador: Empleados = {
    usuario: '',
    nombre: '',
    apellido: '',
    correo: '',
    contrasenha: '',
    esAdmin: 1,
  };

  clear() {
    this.administrador = {
      usuario: '',
      nombre: '',
      apellido: '',
      correo: '',
      contrasenha: '',
      esAdmin: 1,
    };
  }

  agregarAdministrador() {
    console.log(this.administrador);
    this.service
      .agregarAdministrador(this.administrador)
      .subscribe((administrador) =>
        this.administradores.push(this.administrador)
      );
    this.ngOnInit();
  }

  index: number = null;
  guardar(i: number) {
    this.index = i;
    console.log(this.index);
    console.log(this.administradores[i].usuario);
  }

  eliminarAdministrador(i: number) {
    this.administradores[i].usuario;
    console.log(this.administradores[i].usuario);
    this.service
      .borrarAdministrador(this.administradores[i].usuario)
      .subscribe();
    //actualiza tabla
    this.administradores = this.administradores.filter(
      (c) => c.usuario != this.administradores[i].usuario
    );
  }
}
