import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {
  constructor(private _auth: AuthService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = this._auth.getTaken();
    if (!token) token = this._auth.getTakenAdmin();
    const authReq = req.clone({
      headers: req.headers.set('x-auth-token', `${token}`),
    });
    return next.handle(authReq);
  }
}
