import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly ROOT_URL = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  // getdata(type: string) {
  //   return this._http.get(`${this.ROOT_URL + type}`);
  // }
}
