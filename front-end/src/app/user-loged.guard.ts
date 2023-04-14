import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserLogedGuard implements CanActivate {
  islogged: boolean = false;

  constructor(private _auth: AuthService, private router: Router) {
    _auth.currentUser.subscribe(() => {
      if (_auth.currentUser.getValue()) this.islogged = true;
      else this.islogged = false;
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.islogged) return true;
    else {
      this.router.navigate(['/profile']);
      return false;
    }
  }
}
