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

  index: number = null;
  guardar(i: number) {
    this.index = i;
    console.log(this.index);
    console.log(this.administradores[i].usuario);
  }

  constructor(private service: AdministradorService) {}

  ngOnInit() {
    this.obtenerAdministradores();
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

  obtenerAdministradores() {
    this.service
      .obtenerAdministradores()
      .subscribe((administradores) => (this.administradores = administradores));
    console.log(this.administradores);
  }

  agregarAdministrador() {
    console.log(this.administrador);
    this.service.agregarAdministrador(this.administrador).subscribe(
      (administrador) => this.administradores.push(this.administrador),
      (error) => {
        if (error.status == 409) {
          alert('Este usuario ya esta registrado');
        } else if (error.status == 411) {
          alert('Este correo ya esta registrado');
        }
      }
    );
    this.obtenerAdministradores();
    this.clear();
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

  cambios: Empleados = {
    usuario: '',
    nombre: '',
    apellido: '',
    correo: '',
    contrasenha: '',
    esAdmin: 1,
  };

  editarAdmin(i: number): void {
    this.index = i;
    let usuario = this.administradores[i].usuario;
    this.cambios.usuario = this.administradores[i].usuario;
    this.cambios.nombre = this.administradores[i].nombre;
    this.cambios.apellido = this.administradores[i].apellido;
    this.cambios.correo = this.administradores[i].correo;
    this.cambios.contrasenha = this.administradores[i].contrasenha;
    this.cambios.esAdmin = this.administradores[i].esAdmin;
    console.log(this.cambios);
  }

  confirmarCambio() {
    let usuario = this.administradores[this.index].usuario;
    console.log(usuario);
    this.service
      .editarAdministrador(
        this.administradores[this.index].usuario,
        this.cambios
      )
      .subscribe((resp) => console.log('cambios realizados'));
    this.obtenerAdministradores();
  }
}
