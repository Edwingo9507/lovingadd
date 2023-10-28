import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { NuevoProductoComponent } from './administrador/nuevo-producto/nuevo-producto.component';
import { ReportesComponent } from './administrador/reportes/reportes.component';
import { PedidosComponent } from './administrador/pedidos/pedidos.component';
import { IventarioComponent } from './administrador/iventario/iventario.component';
const routes: Routes = [

  {path: 'principal',component: PrincipalComponent },
  {path: '',component: LoginComponent },
  {path: 'carrito', component: CarritoComponent},
  {path:'administrador',component:AdministradorComponent},
  {path:'nuevoproducto',component:NuevoProductoComponent},
  {path:'reportes',component:ReportesComponent},
  {path:'pedidos',component:PedidosComponent},
  {path:'inventario',component:IventarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
