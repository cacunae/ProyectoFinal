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
    this.actualizarVendedores();
  }
  constructor(private service: VendedorService) {}
  //DECLARACION DE VARIABLES
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

  vendedor: Empleados = {
    usuario: '',
    nombre: '',
    apellido: '',
    correo: '',
    contrasenha: '',
    esAdmin: 0,
  };

  cambios: Empleados = {
    usuario: '',
    nombre: '',
    apellido: '',
    correo: '',
    contrasenha: '',
    esAdmin: 0,
  };

  //DECLARACION DE METODOS

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
  actualizarVendedores() {
    this.obtenerVendedores().then((vendedores) => {
      console.log('Vendedores obtenidos', vendedores);
      this.vendedores = vendedores;
      this.dataSource.data = this.vendedores;
    });
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
    this.actualizarVendedores();
    this.clear();
  }

  eliminarVendedor(i: number) {
    this.vendedores[i].usuario;
    console.log(this.vendedores[i].usuario);
    this.service.borrarVendedor(this.vendedores[i].usuario).subscribe();
    this.obtenerVendedores();
    this.actualizarVendedores();
  }

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
    this.actualizarVendedores();
  }

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

  guardar(i: number) {
    this.index = i;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
