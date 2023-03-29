import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
readonly ROOT_URL;
  constructor(private _http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get() {
    return this._http.get(`${this.ROOT_URL}`);
  }
}
