import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly ROOT_URL = 'https://good-reads-a4s1.onrender.com';

  constructor(private _http: HttpClient) {}

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
}
