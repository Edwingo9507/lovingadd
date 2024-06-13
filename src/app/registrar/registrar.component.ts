import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/users';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  register!: FormGroup;


  constructor(private fb: FormBuilder, private _usuariosServices: UsuariosService,
    private router: Router) {

    this.register = this.fb.group({
      correo: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      confirmContrasena: ['', Validators.required],
    })
  }


  ngOnInit(): void {
  }

  registrar(): void {
    //validacion de datos
    

    if (this.register.value.confirmContrasena != this.register.value.contrasena ) {
      //this.toastr.error('Datos obligatorios', 'error');
      return
    }


    const user: User = {
      nombreusuario: this.register.value.usuario,
      contrasena: this.register.value.confirmContrasena,
      role: 1,
      correo: this.register.value.correo,
    };


    this._usuariosServices.registrar(user).subscribe({
      next: (response: string) => {
        this.router.navigate(['/login'])
      },
      error: (e: HttpErrorResponse) => {

        console.log(e)
        alert(`Error: ${e.error.msg}`);
      }
    });



  }
}
