import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment  } from "src/environments/environment.conexion";
import { Producto  } from "../interfaces/producto";

@Injectable({

    providedIn:'root'
})

export class ProductService{

private myappUrl:string;
private myapiUrl:string;

constructor(private http:HttpClient){

this.myappUrl = environment.apiUrl;
this.myapiUrl ='api/productos/'
}

getListaProductos():Observable <Producto[]> {

return  this.http.get <Producto[]>(`${this.myappUrl}${this.myapiUrl}`)

}

eliminarProducto(id:number):Observable<void>{

   return this.http.delete<void>(`${this.myappUrl}${this.myapiUrl}${id}`)
}


guardarProductos(producto:Producto):Observable<void>{

 return this.http.post<void>(`${this.myappUrl}${this.myapiUrl}`,producto)

}


}