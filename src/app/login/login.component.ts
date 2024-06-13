////////////////////////////////////////////////////////////////
import { Component, numberAttribute, OnInit } from '@angular/core';
import { User } from '../interfaces/users';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
import { ProductService } from '../services/produto.services';
//import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombreusuario: string = '';
  contrasena: string = '';


  constructor(private _usuariosServices: UsuariosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    //validacion de datos

    if (this.nombreusuario == '' || this.contrasena == "") {
      //this.toastr.error('Datos obligatorios', 'error');
      return
    }
    const user: User = {
      nombreusuario: this.nombreusuario,
      contrasena: this.contrasena,
      role: null,
      correo: null,
    };

    this._usuariosServices.login(user).subscribe({
      next: (Response: any) => {
        this._usuariosServices.saveLocalUser(Response.user.role);
        localStorage.setItem('token', Response.token)
        this.router.navigate(['/principal'])
      },
      error: (e: HttpErrorResponse) => {

        console.log(e)
        alert(`Error: ${e.error.msg}`);
      }
    });





  }




}
