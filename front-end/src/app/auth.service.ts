import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  finalize,
  of,
  tap,
  throwError,
} from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject(null);
  ROOT_URL: string = 'https://good-reads-a4s1.onrender.com';

  constructor(private _http: HttpClient, private _router: Router) {
    if (localStorage.getItem('userTaken') != null) {
      this.saveCurrentUser();
    }
  }

  register(data: any, endPoint: string): Observable<any> {
    return this._http.post(`${this.ROOT_URL + endPoint}`, data);
  }

  login(data: any, endPoint: string): Observable<any> {
    return this._http.post(`${this.ROOT_URL + endPoint}`, data);
  }

  logout() {
    this.currentUser.next(null);
    localStorage.removeItem('userTaken');
    this._router.navigate(['/home']);
  }

  getData(endPoint: string) {
    return this._http.get(`${this.ROOT_URL + endPoint}`);
  }

  postData(endPoint: string, data: any) {
    return this._http.post(`${this.ROOT_URL + endPoint}`, data);
  }

  deleteData(endPoint: string) {
    return this._http.delete(`${this.ROOT_URL + endPoint}`);
  }

  putData(endPoint: string, data: any) {
    return this._http.put(`${this.ROOT_URL + endPoint}`, data);
  }

  patchData(endPoint: string, data: any) {
    return this._http.patch(`${this.ROOT_URL + endPoint}`, data);
  }

  saveCurrentUser() {
    let token: any = localStorage.getItem('userTaken');
    this.currentUser.next(jwtDecode(token));
  }

  getTaken() {
    return localStorage.getItem('userTaken');
  }
}
