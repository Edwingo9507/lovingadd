import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  

private urlApi= 'http://api.positionstack.com/v1/forward?access_key=69ac6e099bc5266643a0b2cdcaa77cd7&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC';

  constructor(private http:HttpClient) { }
public getdata():Observable<any>{

  return this.http.get<any>(this.urlApi)
}

}
