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
export class AdminGuard implements CanActivate {
  adminLoged: boolean = false;

  constructor(private _auth: AuthService, private router: Router) {
    _auth.loggedAdmin.subscribe(() => {
      if (_auth.loggedAdmin.getValue()) this.adminLoged = true;
      else this.adminLoged = false;
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
    if (this.adminLoged) return true;
    else {
      this.router.navigate(['/adminlogin']);
      return this.adminLoged;
    }
  }
}
