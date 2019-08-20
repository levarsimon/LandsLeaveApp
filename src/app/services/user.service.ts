import { Injectable } from '@angular/core';
import {User, UserAdapter} from '../models/UserModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private adapter: UserAdapter) {

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

   httpOptions={
     headers: new HttpHeaders({
       'Content-Type':'application/json'
     })
   }

  getUser():Observable<User>{
    return this.http.get('url').pipe(
      map((data:any) => data.map(item => this.adapter.adapt(item))),
    retry(1),
    catchError(this.errorHandl)
  );
  }

  addUser(user:User):Observable<User>{
    return this.http.post('url',JSON.stringify(user.toJson())).pipe(
      map((data:any)=>data.map(item => this.adapter.adapt(item))),
    retry(1),catchError(this.errorHandl)
  );
  }

  deleteUser(id){

  }

}