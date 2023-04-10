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
  baseAPI: string = 'http://localhost:3000';

  constructor(private _http: HttpClient, private _router: Router) {
    if (localStorage.getItem('userTaken') != null) {
      this.saveCurrentUser();
    }
  }

  register(data: any): Observable<any> {
    return this._http.post(`${this.baseAPI}/users/sing-up`, data);
  }

  login(data: any): Observable<any> {
    return this._http.post(`${this.baseAPI}/users/login`, data);
  }

  logout() {
    this.currentUser.next(null);
    localStorage.removeItem('userTaken');
    this._router.navigate(['/home']);
  }

  saveCurrentUser() {
    let taken: any = localStorage.getItem('userTaken');
    this.currentUser.next(jwtDecode(taken));
  }

  // errorHandler(error: HttpErrorResponse) {
  //   return throwError(error.message || 'server error.');
  // }.pipe(catchError((err) => {return this.errorHandler(err);}));
}
