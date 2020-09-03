import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VendedorComponent } from './componentes/vendedor/vendedor.component';
import { AdministradoresComponent } from './componentes/administradores/administradores.component';
import { LoginUsuarioComponent } from './componentes/login-usuario/login-usuario.component';
import { LoginAdminComponent } from './componentes/login-admin/login-admin.component';
import { InicioComponent } from './VistaVendedores/inicio/inicio.component';
import { StockComponent } from './VistaVendedores/stock/stock.component';
import { VentasComponent } from './VistaVendedores/ventas/ventas.component';

const routes: Routes = [
  { path: '', component: LoginUsuarioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'stock', component: StockComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'vendedores', component: VendedorComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: 'administradores', component: AdministradoresComponent },
  { path: 'login-admin', component: LoginAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
