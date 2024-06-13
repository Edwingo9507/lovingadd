import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto';
import { ProductService } from 'src/app/services/produto.services';


@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {

  form!: FormGroup;
 id:number
operacion:string ='Agregar '
  
constructor(private aRouter:ActivatedRoute, private fb: FormBuilder, private _ProductService:ProductService, private router:Router){

  this.form=this.fb.group({
    
    nombre:['', Validators.required],
    referencia:['', Validators.required], 
    talla:['', Validators.required], 
    color:['', Validators.required], 
    precio:['', Validators.required], 

  })

  this.id = Number(aRouter.snapshot.paramMap.get('id'))
  console.log(this.id)
}
  
  
  ngOnInit(): void {

    if (this.id != 0) {
      this.operacion = 'Editar';
      this.getProduct(this.id);
    }
  
  }

getProduct(id:number){

this._ProductService.getProduct(id).subscribe((data:Producto)=>{

  console.log(data);
  this.form.patchValue({nombre:data.nombre,color:data.color,referencia:data.referencia,talla:data.talla,precio:data.precio})
  
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
  
  if (this.id != 0)
  {
    producto.id=this.id
    this._ProductService.updateProduct(this.id, producto).subscribe(() => {
  
      this.router.navigate(['/principal/'])

      alert(`Producto actualizado con exito`)

    
})

  }
  else {
    
    this._ProductService.guardarProductos(producto).subscribe(()=>{
      console.log('producto agregado')
      this.router.navigate(['/principal/'])
      alert('producto agregado correctamente')
    },)
    }
  }





  }


  


