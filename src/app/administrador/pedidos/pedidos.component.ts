import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {

  data: any[]=[];

constructor( private apiservice:APIService){}

  ngOnint(): void {
    this.llenarData();
  };

  llenarData(){
this.apiservice.getdata().subscribe(data=>{
  this.data=data;
  console.log(this.data);
})
  }


}

