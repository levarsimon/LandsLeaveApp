import { Injectable } from '@angular/core';
import {User} from '../models/UserModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,) {

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

  getUser(id:number):Observable<User>{
    return this.http.get<User>('http://dbserver3/lttt/employee/'+id).pipe(
    //retry(1),
    map(
      (u: any) => u
    ),
    catchError(this.errorHandl)
  );
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>('http://dbserver3/lttt/employee/getall').pipe(
    //retry(1),
    catchError(this.errorHandl)
  );
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>('url',JSON.stringify(user)).pipe(
    retry(1),
    catchError(this.errorHandl)
  );
  }

  deleteUser(id:number){
     return this.http.delete('url').pipe(
       retry(1),catchError(this.errorHandl)
     )
  }
}