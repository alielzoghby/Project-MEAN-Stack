import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly ROOT_URL = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  getData(endPoint: string) {
    return this._http.get(`${this.ROOT_URL + endPoint}`).pipe(
      catchError((err) => {
        return this.errorHandler(err);
      })
    );
  }

  postData(endPoint: string, data: any) {
    return this._http.post(`${this.ROOT_URL + endPoint}`, data).pipe(
      catchError((err) => {
        return this.errorHandler(err);
      })
    );
  }

  deleteData(endPoint: string) {
    return this._http.delete(`${this.ROOT_URL + endPoint}`).pipe(
      catchError((err) => {
        return this.errorHandler(err);
      })
    );
  }

  putData(endPoint: string, data: any) {
    return this._http.put(`${this.ROOT_URL + endPoint}`, data).pipe(
      catchError((err) => {
        return this.errorHandler(err);
      })
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error.error || 'server error.');
  }
}
