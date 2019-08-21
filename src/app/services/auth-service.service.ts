import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { LoginAdapter, Login} from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private adapter: LoginAdapter) {
  }

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   }

   errorHandl(error) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     // Get client-side error
     errorMessage = error.error.message;
   } else {
     // Get server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   console.log(errorMessage);
   return throwError(errorMessage);
}


signin(credentials):Observable<Login> {
  return this.http.post('http://dbserver3/lttt/api/employee/authenticate',
    JSON.stringify(credentials),this.httpOptions).pipe(
      map((data:any)=> data.map(item=> this.adapter.adapt(item))),
      retry(1),
      catchError(this.errorHandl)
    );

}

 notifyLogin(credentials){

   let result= this.signin(credentials)['_body'];

   if (result && result.token){
     return true;
   }else{
     return false;
   }

 }

signout(): Observable<null> {
    return of(null);
}
}