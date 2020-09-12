import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VendedorComponent } from './componentes/vendedor/vendedor.component';
import { LoginAdminComponent } from './componentes/login-admin/login-admin.component';
import { LoginUsuarioComponent } from './componentes/login-usuario/login-usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdministradoresComponent } from './componentes/administradores/administradores.component';
import { VentasComponent } from './VistaVendedores/ventas/ventas.component';
import { StockComponent } from './VistaVendedores/stock/stock.component';
import { InicioComponent } from './VistaVendedores/inicio/inicio.component';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    ProductosComponent,
    VendedorComponent,
    LoginAdminComponent,
    LoginUsuarioComponent,
    AdministradoresComponent,
    VentasComponent,
    StockComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
