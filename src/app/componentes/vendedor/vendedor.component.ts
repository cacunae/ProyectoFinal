import { Component, OnInit } from '@angular/core';
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
  vendedores: Empleados[] = [];
  columnasAMostrar: string[] = [
    'usuario',
    'nombre',
    'apellido',
    'correo',
    'opciones',
  ];

  constructor(private service: VendedorService) {}

  ngOnInit(): void {
    this.service
      .obtenerVendedores()
      .subscribe((vendedores) => (this.vendedores = vendedores));
    console.log(this.vendedores);
  }
  vendedor: Empleados = {
    usuario: '',
    nombre: '',
    apellido: '',
    correo: '',
    contrasenha: '',
    esAdmin: 0,
  };
  
  agregarVendedor() {
    console.log(this.vendedor);
    this.service
      .agregarVendedor(this.vendedor)
      .subscribe((vendedor) =>
        this.vendedores.push(this.vendedor)
      );
    
  }
  index: number = null;

  guardar(i: number) {
    this.index = i;
    console.log(this.index);
    console.log(this.vendedores[i].usuario);
  }

  eliminarVendedor(i: number) {
    this.vendedores[i].usuario;
    console.log(this.vendedores[i].usuario);
    this.service
      .borrarVendedor(this.vendedores[i].usuario)
      .subscribe();
    //actualiza tabla
    this.vendedores = this.vendedores.filter(
      (c) => c.usuario != this.vendedores[i].usuario
    );
  }
}
