import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { User } from '../interfaces/users';

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.css']
})
export class NavarComponent {
  constructor( private _usuariosUser:UsuariosService ,private router: Router) {


  }
  logOut() {

    localStorage.removeItem('user')
    localStorage.removeItem('token')
    this.router.navigate(['/login'])

  }

}
