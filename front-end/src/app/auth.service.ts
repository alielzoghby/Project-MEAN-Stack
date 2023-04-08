import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject(null);
  baseAPI: string = 'http://localhost3000';

  constructor(private _http: HttpClient, private _router: Router) {
    // if (/*chick if local storagr or cookies for user is not iempty */) {
    //   this.saveCurrentUser();
    // }
  }

  register(data: any): Observable<any> {
    return this._http.post(`${this.baseAPI}/`, data);
  }

  login(data: any): Observable<any> {
    return this._http.post(`${this.baseAPI}/`, data);
  }
  logout() {
    this.currentUser.next(null);
    //remove taken from local storage or cookies
    this._router.navigate(['/home']);
  }

  saveCurrentUser() {
    let taken: any; ///get taken localstorige or cookies
    this.currentUser.next(jwtDecode(taken));
  }
}
