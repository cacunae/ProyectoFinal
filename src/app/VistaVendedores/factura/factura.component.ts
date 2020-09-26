import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
//INTERFACES
import { Productos } from './../../Models/producto.model';
import { Venta } from '../../Models/venta.model';
import { DetallesVenta } from '../../Models/detallesVenta.model';
//SERVICIOS
import { ProductosService } from 'src/app/services/productos.service';
import { DetalleVentaService } from 'src/app/services/detalle-venta.service';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],

})
export class FacturaComponent implements OnInit {

  constructor(private service: ProductosService, private serviceVenta: VentasService,  private serviceDetalleVenta: DetalleVentaService)
      {
        expandedElement: null;
      }
  venta:Venta = { 
    idVenta: null,
    idVendedor: null,
    fechaHora: null,
    formaDePago: "",
    total: null,
  } 
  columnasFactura: string[] = [
    'nombre',
    'precio',
    'cantidad',
    'subtotal',
  ];
  
  id = sessionStorage.getItem("usuario");
  nombre = sessionStorage.getItem("nombre");
  apellido = sessionStorage.getItem("apellido");
  

  detalleVenta : DetallesVenta[]; 

  ngOnInit(): void {
    this.obtenerVenta();
    this.obtenerDetalleVenta();
  }

  obtenerVenta(){
    this.serviceVenta.obtenerIdVenta(this.id).subscribe((ultimaVenta)=> {
    this.venta.idVenta = ultimaVenta.idVenta,
    this.venta.idVendedor= ultimaVenta.idVendedor,
    this.venta.fechaHora = ultimaVenta.fechaHora,
    this.venta.formaDePago = ultimaVenta.formaDePago,
    this.venta.total = ultimaVenta.total
  });
 }
 obtenerDetalleVenta(){
   this.serviceDetalleVenta.obtenerUltimoDetalleVenta().subscribe((Response)=> this.detalleVenta= Response);
 }
}
    

