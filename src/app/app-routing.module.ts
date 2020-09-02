import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VendedorComponent } from './componentes/vendedor/vendedor.component';
import { LoginUsuarioComponent } from './componentes/login-usuario/login-usuario.component';
import { LoginAdminComponent } from './componentes/login-admin/login-admin.component';
import { AdministradoresComponent } from './componentes/administradores/administradores.component';

const routes: Routes = [
  { path: '', component: AdministradorComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'vendedores', component: VendedorComponent },
  { path: 'administradores', component: AdministradoresComponent },
  { path: 'login-usuario', component: LoginUsuarioComponent },
  { path: 'login-admin', component: LoginAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
