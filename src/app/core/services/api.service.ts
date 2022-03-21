import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  constructor(private http: HttpClient) {}

  private formatErrors(err: HttpErrorResponse): Observable<never> {
    return throwError(err);
  }

  get(path: string, options: object = {}): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}${path}`, options)
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: object = {}, options: object = {}): Observable<any> {
    return this.http
      .put(`${environment.apiUrl}${path}`, JSON.stringify(body), {
        ...this.options,
        ...options,
      })
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: object = {}, options: object = {}): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}${path}`, JSON.stringify(body), {
        ...this.options,
        ...options,
      })
      .pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http
      .delete(`${environment.apiUrl}${path}`)
      .pipe(catchError(this.formatErrors));
  }
}
