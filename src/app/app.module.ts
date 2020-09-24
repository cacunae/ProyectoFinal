import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VendedorComponent } from './componentes/vendedor/vendedor.component';
import { LoginUsuarioComponent } from './componentes/login-usuario/login-usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdministradoresComponent } from './componentes/administradores/administradores.component';
import { VentasComponent } from './VistaVendedores/ventas/ventas.component';
import { StockComponent } from './VistaVendedores/stock/stock.component';
import { InicioComponent } from './VistaVendedores/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarAdministradorComponent } from './componentes/navbar-administrador/navbar-administrador.component';
import { NavbarVendedorComponent } from './componentes/navbar-vendedor/navbar-vendedor.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    ProductosComponent,
    VendedorComponent,
    LoginUsuarioComponent,
    AdministradoresComponent,
    VentasComponent,
    StockComponent,
    InicioComponent,
    NavbarAdministradorComponent,
    NavbarVendedorComponent,
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
