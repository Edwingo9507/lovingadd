import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ReportesComponent } from './administrador/reportes/reportes.component';
import { NuevoProductoComponent } from './administrador/nuevo-producto/nuevo-producto.component';
import { IventarioComponent } from './administrador/iventario/iventario.component';
import { PedidosComponent } from './administrador/pedidos/pedidos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    CarritoComponent,
    AdministradorComponent,
    ReportesComponent,
    NuevoProductoComponent,
    IventarioComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
