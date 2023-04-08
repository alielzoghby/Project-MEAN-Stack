import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject(null);
  baseAPI: string = 'http://localhost3000';

  constructor(private _http: HttpClient) {}

  register(data: any): Observable<any> {
    return this._http.post(`${this.baseAPI}/`, data);
  }

  login(data: any): Observable<any> {
    return this._http.post(`${this.baseAPI}/`, data);
  }

  saveCurrentUser() {
    let taken: any; ///get taken localstorige or cookies
    this.currentUser.next(jwtDecode(taken));
  }
}
