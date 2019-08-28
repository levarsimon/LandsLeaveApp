import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { LoginAdapter, Login} from '../models/Login';
import { Store } from '@ngxs/store';
import { AuthState } from '../states/auth-state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private adapter: LoginAdapter,private _store:Store) {
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
  return this.http.post('http://dbserver3/lttt/employee/authenticate',
    JSON.stringify(credentials),this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
}

 notifyLogin(credentials){

   const token = this._store.selectSnapshot(AuthState.token);

   if (token){
     return true;
   }else{
     return false;
   }

 }

signout(): Observable<null> {
    return of(null);
}
}