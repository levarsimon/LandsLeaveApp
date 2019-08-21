import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeaveAdapter, Leave } from '../models/Leave';
import { throwError, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient, private adapter: LeaveAdapter) { }

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

getLeave():Observable<Leave[]>{
  return this.http.get('url').pipe(
    map((data:any) => data.map(item => this.adapter.adapt(item))),
    retry(1),
    catchError(this.errorHandl)
  );
}

  applyLeave(leave:Leave){

  }

  cancelLeave(id){
    return this.http.delete('url',)
  }

}