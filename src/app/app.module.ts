import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { PermisosDirective } from './permisos.directive';
import { RegistrarComponent } from './registrar/registrar.component';
import { NavarComponent } from './navar/navar.component';

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
    PedidosComponent,
    PermisosDirective,
    RegistrarComponent,
    NavarComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
