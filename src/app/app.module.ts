import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VendedorComponent } from './componentes/vendedor/vendedor.component';
import { LoginAdminComponent} from './componentes/login-admin/login-admin.component';
import { LoginUsuarioComponent} from './componentes/login-usuario/login-usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdministradoresComponent } from './componentes/administradores/administradores.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    ProductosComponent,
    VendedorComponent,
    LoginAdminComponent,
    LoginUsuarioComponent,
    AdministradoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    NgbModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
