import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
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

  getِAllData(endPoint: string) {
    return this._http.get(`${this.ROOT_URL + endPoint}`, {
      params: { skipPagination: true },
    });
  }

  deleteData(endPoint: string) {
    return this._http.delete(`${this.ROOT_URL + endPoint}`);
  }

  postData(endPoint: string, data: any) {
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

  putData(endPoint: string, data: any) {
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

  patchData(endPoint: string, data: any) {
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
}
