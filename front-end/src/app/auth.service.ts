import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject(null);
  ROOT_URL: string = 'https://good-reads-a4s1.onrender.com';
  loggedAdmin = new BehaviorSubject(null);

  constructor(private _http: HttpClient, private _router: Router) {
    if (localStorage.getItem('userTaken') != null) {
      this.saveCurrentUser();
    }
    if (localStorage.getItem('adminTaken') != null) {
      this.saveloggedAdmin();
    }
  }

  register(data: any, endPoint: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('enctype', 'multipart/form-data');
    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] instanceof FileList) {
          for (let i = 0; i < data[key].length; i++) {
            formData.append(key, data[key][i]);
          }
        } else {
          formData.append(key, data[key]);
        }
      }
    }
    return this._http.post(`${this.ROOT_URL + endPoint}`, formData, {
      headers,
    });
  }

  login(data: any, endPoint: string): Observable<any> {
    return this._http.post(`${this.ROOT_URL + endPoint}`, data);
  }

  logout() {
    this.currentUser.next(null);
    this.loggedAdmin.next(null);

    localStorage.removeItem('userTaken');
    localStorage.removeItem('adminTaken');
    this._router.navigate(['/home']);
  }

  saveCurrentUser() {
    let token: any = localStorage.getItem('userTaken');
    this.currentUser.next(jwtDecode(token));
  }

  getTaken() {
    return localStorage.getItem('userTaken');
  }

  saveloggedAdmin() {
    let token: any = localStorage.getItem('adminTaken');
    this.loggedAdmin.next(jwtDecode(token));
  }

  getTakenAdmin() {
    return localStorage.getItem('adminTaken');
  }
}
