import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/users';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

nombreusuario:string='';
contrasena:string='';

  constructor(private _usuarios:UsuariosService,
    private router:Router) { }

  ngOnInit(): void {
    // Initialization tasks can go here
  }

  login(){

    const user:User={

      nombreusuario:this.nombreusuario,
      contrasena:this.contrasena,
    }

    this._usuarios.login(user).subscribe({
      next:(token)=>{

      this.router.navigate(['/principal'])
      localStorage.setItem('token',token)
        
      }
    })


  }

}
