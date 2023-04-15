import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminSigninComponent } from '../admin-signin/admin-signin.component';
declare let AOS: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbarfixed: boolean = false;
  isLoged: boolean = false;
  adminLooged: boolean = false;

  constructor(private _router: Router, private _auth: AuthService) {
    _auth.currentUser.subscribe((res) => {
      if (_auth.currentUser.getValue()) this.isLoged = true;
      else this.isLoged = false;
    });

    _auth.loggedAdmin.subscribe(() => {
      this.adminLooged = _auth.loggedAdmin.getValue();
    });
  }

  ngOnInit(): void {
    AOS.init();
  }

  logout() {
    this.adminLooged = false;
    this._auth.logout();
  }

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 60) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }
}
