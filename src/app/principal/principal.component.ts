import { Component ,OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ProductService } from '../services/produto.services';
import { first } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

listadeproductos: Producto []=[]


constructor(private _productoServicios:ProductService){


}
  ngOnInit(): void {
    this.getListaProductos();

  }





getListaProductos(){

this._productoServicios.getListaProductos().subscribe((data)=>{

this.listadeproductos=data;

})
  }

eliminarProducto(id:number){

  this._productoServicios.eliminarProducto(id).subscribe((data)=>{console.log(data)})
this.getListaProductos();
}

}




