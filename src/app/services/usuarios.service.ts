import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.conexion';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http:HttpClient) { 

this.myAppUrl=environment.apiUrl
this.myApiUrl='api/users'

  }

  signIn(user:UsuariosService):Observable<any>{


return  this.http.post(`${this.myApiUrl}${this.myAppUrl}`,user);
  }

  login(user:User):Observable<string>{
    return  this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`,user);

  }
  
}
