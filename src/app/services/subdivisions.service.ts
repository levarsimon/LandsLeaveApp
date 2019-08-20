import { Injectable } from '@angular/core';
import {Subdivision, SubdivisionAdapter} from '../models/Subdivision';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubdivisionsService {

  constructor(private http: HttpClient, private adapter: SubdivisionAdapter) { }

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

  getSubdivisions():Observable<Subdivision>{
    return this.http.get('url').pipe(
      map((data:any) => data.map(item => this.adapter.adapt(item))),
      retry(1),
      catchError(this.errorHandl)
  );
  }
}