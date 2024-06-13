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

  constructor(private http: HttpClient) {

    this.myAppUrl = environment.apiUrl
    this.myApiUrl = 'api/users'

  }





  signIn(user: UsuariosService): Observable<any> {


    return this.http.post(`${this.myApiUrl}${this.myAppUrl}`, user);
  }

  login(user: User): Observable<[string, User]> {
    return this.http.post<[string, User]>(`${this.myAppUrl}${this.myApiUrl}/login`, user);

  }

  registrar(user: User): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/`, user);

  }

  saveLocalUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLocalUser(): User | null {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        return JSON.parse(userString) as User;
      } catch (error) {
        console.error('Error parsing user from localStorage', error);
        return null;
      }
    }
    return null;



  }



}


