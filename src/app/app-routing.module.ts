import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VendedorComponent } from './componentes/vendedor/vendedor.component';
import { AdministradoresComponent } from './componentes/administradores/administradores.component';
import { LoginUsuarioComponent } from './componentes/login-usuario/login-usuario.component';
import { InicioComponent } from './VistaVendedores/inicio/inicio.component';
import { StockComponent } from './VistaVendedores/stock/stock.component';
import { VentasComponent } from './VistaVendedores/ventas/ventas.component';
import { AuthGaurdService } from 'src/app/services/auth-gaurd.service';
import { FacturaComponent } from './VistaVendedores/factura/factura.component';
import { HomeComponent } from './landingPage/home/home.component';
let vendedor: string = '0';
let admin: string = '1';

const routes: Routes = [
  { path: 'login', component: LoginUsuarioComponent },
  { path: '', component: HomeComponent},
  {
    path: 'portalventas',
    component: InicioComponent,
    canActivate: [AuthGaurdService],
    data: {
      expectedRole: vendedor,
    },
  },
  {
    path: 'stock',
    component: StockComponent,
    canActivate: [AuthGaurdService],
    data: {
      expectedRole: vendedor,
    },
  },
  {
    path: 'ventas',
    component: VentasComponent,
    canActivate: [AuthGaurdService],
    data: {
      expectedRole: vendedor,
    },
  },
  {
    path: 'factura',
    component: FacturaComponent,
    canActivate: [AuthGaurdService],
    data: {
      expectedRole: vendedor
    },
  },
  {
    path: 'productos',
    component: ProductosComponent,
    canActivate: [AuthGaurdService],
    data: {
      expectedRole: admin,
    },
  },
  {
    path: 'vendedores',
    component: VendedorComponent,
    canActivate: [AuthGaurdService],
    data: {
      expectedRole: admin,
    },
  },
  {
    path: 'administrador',
    component: AdministradorComponent,
    canActivate: [AuthGaurdService],
    data: {
      expectedRole: admin,
    },
  },
  {
    path: 'administradores',
    component: AdministradoresComponent,
    canActivate: [AuthGaurdService],
    data: {
      expectedRole: admin,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
