import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductService } from 'src/app/services/produto.services';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {

form!: FormGroup;

constructor(private fb: FormBuilder, private _ProductService:ProductService, private router:Router){

  this.form=this.fb.group({
    
    nombre:['', Validators.required],
    referencia:['', Validators.required], 
    talla:['', Validators.required], 
    color:['', Validators.required], 
    precio:['', Validators.required], 

  })
  
}

addproducto(){

  
// console.log(this.form.value.nombre)
// onsole.log(this.form.value.get)

const producto: Producto ={
  id:this.form.value.id,
  nombre:this.form.value.nombre,
  referencia:this.form.value.referencia,
  talla:this.form.value.talla,
  color:this.form.value.color,
  precio:this.form.value.precio
}

this._ProductService.guardarProductos(producto).subscribe(()=>{
  console.log('producto agregado')
  this.router.navigate(['/principal/'])
})
}


  }


  


