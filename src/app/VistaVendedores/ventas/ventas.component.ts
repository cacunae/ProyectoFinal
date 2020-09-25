import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
//INTERFACES
import { Productos } from './../../Models/producto.model';
import { Venta } from '../../Models/venta.model';
import { DetallesVenta } from '../../Models/detallesVenta.model';
//SERVICIOS
import { ProductosService } from 'src/app/services/productos.service';
import { DetalleVentaService } from 'src/app/services/detalle-venta.service';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  constructor(
    private service: ProductosService,
    private serviceVenta: VentasService,
    private serviceDetalleVenta: DetalleVentaService
  ) {
    expandedElement: null;
  }

  ngOnInit(): void {
    this.actualizarStock();
  }

  stock: Productos[];
  dataSource = new MatTableDataSource();
  ventaDataSource = new MatTableDataSource();
  columnasBusqueda: string[] = [
    'id',
    'nombre',
    'marca',
    'precio',
    'stock',
    'agregar',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //METODOS Y FUNCIONES DE LA SECCION DE BUSQUEDA DE PRODUCTOS
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  productoSeleccionado: DetallesVenta = {
    id: null,
    idVenta: null,
    idProducto: null,
    nombreProducto: '',
    precio: null,
    cantidad: 1,
    descuento: 0,
  };

  seleccionar(producto: Productos) {
    console.log(producto);
    console.log(this.stock);
    let i = this.stock.indexOf(producto);
    console.log(i);
    this.productoSeleccionado.idProducto = this.stock[i].id;
    this.productoSeleccionado.nombreProducto = this.stock[i].nombre;
    this.productoSeleccionado.precio = this.stock[i].precio;
  }
  agregarProductoSeleccionado() {
    let temp: DetallesVenta = {
      id: null,
      idVenta: null,
      idProducto: null,
      nombreProducto: '',
      precio: 0,
      cantidad: 1,
      descuento: 0,
    };
    temp = Object.assign(temp, this.productoSeleccionado);
    this.productosSeleccionados.push(temp);
    this.ventaDataSource.data = this.productosSeleccionados;
    console.log(this.productosSeleccionados);
    this.obtenerTotal();
  }
  //SERVICIOS
  obtenerStock() {
    let promise = new Promise<Productos[]>((resolve, reject) => {
      this.service.obtenerStock().subscribe(
        (producto) => {
          resolve(producto);
        },
        (error) => {
          console.log('exploto estooo');
          reject('ERROR AL OBTENER EL STOCK');
        }
      );
    });
    return promise;
  }
  actualizarStock() {
    console.log('Obteniendo stock');
    this.obtenerStock().then((productos) => {
      console.log('productos obtenidos', productos);
      this.stock = productos;
      this.dataSource.data = this.stock;
      console.log(this.dataSource);
    });
  }

  // FIN DE BUSQUEDA DE PRODUCTOS

  productosSeleccionados: DetallesVenta[] = [];

  columnasFactura: string[] = [
    'id',
    'nombre',
    'precio',
    'cantidad',
    'subtotal',
  ];

  total = 0;

  obtenerTotal() {
    this.total = 0;
    let x = this.productosSeleccionados.length - 1;
    for (let index = 0; index < this.productosSeleccionados.length; index++) {
      this.total +=
        this.productosSeleccionados[index].precio *
        this.productosSeleccionados[index].cantidad;
    }
    console.log(this.total);
  }

  ventaEnCurso: Venta = {
    idVenta: null,
    idVendedor: 'vendedor',
    fechaHora: new Date(),
    formaDePago: '',
    total: null,
  };

  guardarVenta() {
    this.ventaEnCurso.total = this.total;
    this.serviceVenta.agregarVenta(this.ventaEnCurso).subscribe();
    this.obtenerIdVenta();
    //this.total = 0;
    this.guardarDetalleVenta();
  }

  obtenerIdVenta() {
    let promise = new Promise<Venta>((resolve, reject) => {
      this.serviceVenta.obtenerIdVenta(this.ventaEnCurso.idVendedor).subscribe(
        (data) => {
          resolve(data);
          console.log(data);
        },
        (error) => {
          console.log('no obtuve el idVenta');
          reject('error al obtener el idVenta');
        }
      );
    });

    return promise;
  }

  guardarDetalleVenta() {
    this.obtenerIdVenta().then((ultimaVenta) => {
      console.log('La ultima venta es esta: ', ultimaVenta);
      for (let i = 0; i < this.productosSeleccionados.length; i++) {
        this.productosSeleccionados[i].idVenta = ultimaVenta.idVenta;
      }
      this.serviceDetalleVenta
        .agregarDetallesVentas(this.productosSeleccionados)
        .subscribe();
      console.log('LLEGUÉ AQUI');
    });
    this.obtenerStock();
  }

  toggleOpciones() {
    if (!this.columnasFactura.includes('boton')) {
      this.columnasFactura.push('boton');
    } else {
      this.columnasFactura.splice(5, 5);
    }
  }
}
