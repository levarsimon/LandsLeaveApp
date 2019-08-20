import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   }

signin(credentials) {
  return this.http.post('http://dbserver3/lttt/api/employee/authenticate',
    JSON.stringify(credentials),this.httpOptions).pipe(map(response => {
      let result= response['_body'];
      if(result && result.token){
        localStorage.setItem('token',result.token);
        return true;
      }
      return false;
    }));

}

signout(): Observable<null> {
    return of(null);
}
}