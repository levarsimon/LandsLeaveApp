import { Injectable } from '@angular/core';
import { Subdivision } from '../models/Subdivision';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubdivisionsService {

  constructor(private http: HttpClient) { }

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

  getSubdivisions(): Observable<Subdivision>{
    return this.http.get<Subdivision>('url').pipe(retry(1),
      catchError(this.errorHandl)
  );
  }
}