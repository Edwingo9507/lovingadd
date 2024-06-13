import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/produto.services';
import { first } from 'rxjs';
import { Producto } from '../interfaces/producto';
import { UsuariosService } from '../services/usuarios.service';
import { User } from '../interfaces/users';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  listadeproductos: Producto[] = []
  user: User | null = null
  userRole: number | null = null
  constructor(private aRouter:ActivatedRoute, private router: Router, private _productoServicios: ProductService, private _usurioServices: UsuariosService) {}

  ngOnInit(): void {
    if (this.validateUser()) {
      this.getListaProductos();

    }
    else {
      
      this.getListaProductos();
    }
  }

  validateUser(): boolean {
    const user = this._usurioServices.getLocalUser()
    if (user != null) {
      this.user = user
      this.userRole = typeof user === 'number' ? user : null;
    }
    return (user != null)
  }

  getListaProductos() {

    this._productoServicios.getListaProductos().subscribe((data) => {
    this.listadeproductos = data;    })
  }

  eliminarProducto(id: number) {
    this._productoServicios.eliminarProducto(id).subscribe(()=>{
      this.getListaProductos();
      

    }) 
    alert('producto eliminado')
    
  }




}



