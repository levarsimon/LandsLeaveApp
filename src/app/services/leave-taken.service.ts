import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LeaveTakenAdapter, leaveTaken } from '../models/leaveTaken';
import { throwError, Observable } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaveTakenService {

  constructor(private http: HttpClient, private adapter: LeaveTakenAdapter) {

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


getLeaveTaken(id:number):Observable<leaveTaken[]>{
  return this.http.get('url').pipe(
    map((data:any) => data.map(item => this.adapter.adapt(item))),
  retry(1),
  catchError(this.errorHandl)
  );
}
}