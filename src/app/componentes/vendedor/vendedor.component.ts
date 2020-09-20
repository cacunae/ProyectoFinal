import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
//interface
import { Empleados } from 'src/app/Models/empleado.model';
//servicio
import { VendedorService } from 'src/app/services/vendedor.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css'],
})
export class VendedorComponent implements OnInit {
  ngOnInit() {
    console.log('Obteniendo admins');
    this.obtenerVendedores().then((empleado) => {
      console.log('empleados obtenidos', empleado);
      this.vendedores = empleado;
      this.dataSource.data = this.vendedores;
    });
  }
  vendedores: Empleados[] = [];
  dataSource = new MatTableDataSource();
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
    console.log(this.vendedores[i].usuario);
  }

  constructor(private service: VendedorService) {}

  vendedor: Empleados = {
    usuario: '',
    nombre: '',
    apellido: '',
    correo: '',
    contrasenha: '',
    esAdmin: 0,
  };

  clear() {
    this.vendedor = {
      usuario: '',
      nombre: '',
      apellido: '',
      correo: '',
      contrasenha: '',
      esAdmin: 0,
    };
  }

  agregarVendedor() {
    console.log(this.vendedor);
    this.service.agregarVendedor(this.vendedor).subscribe(
      (vendedor) => this.vendedores.push(this.vendedor),
      (error) => {
        if (error.status == 409) {
          alert('Este usuario ya esta registrado');
        } else if (error.status == 411) {
          alert('Este correo ya esta registrado');
        }
      }
    );
    this.obtenerVendedores();
    this.clear();
  }
  obtenerVendedores() {
    let promise = new Promise<Empleados[]>((resolve, reject) => {
      this.service.obtenerVendedores().subscribe(
        (vendedor) => {
          resolve(vendedor);
        },
        (error) => {
          console.log('exploto estooo');
          reject('ERROR AL OBTENER EL STOCK');
        }
      );
    });
    return promise;
  }

  eliminarVendedor(i: number) {
    this.vendedores[i].usuario;
    console.log(this.vendedores[i].usuario);
    this.service.borrarVendedor(this.vendedores[i].usuario).subscribe();
    //actualiza tabla
    this.vendedores = this.vendedores.filter(
      (c) => c.usuario != this.vendedores[i].usuario
    );
  }

  cambios: Empleados = {
    usuario: '',
    nombre: '',
    apellido: '',
    correo: '',
    contrasenha: '',
    esAdmin: 0,
  };

  editarVendedor(i: number): void {
    this.index = i;
    let usuario = this.vendedores[i].usuario;
    this.cambios.usuario = this.vendedores[i].usuario;
    this.cambios.nombre = this.vendedores[i].nombre;
    this.cambios.apellido = this.vendedores[i].apellido;
    this.cambios.correo = this.vendedores[i].correo;
    this.cambios.contrasenha = this.vendedores[i].contrasenha;
    this.cambios.esAdmin = this.vendedores[i].esAdmin;
    console.log(this.cambios);
  }

  confirmarCambio() {
    let usuario = this.vendedores[this.index].usuario;
    console.log(usuario);
    this.service
      .editarVendedor(this.vendedores[this.index].usuario, this.cambios)
      .subscribe((resp) => console.log('cambios realizados'));
    this.obtenerVendedores();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
