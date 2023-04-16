import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
    _auth.currentUser.subscribe(() => {
      if (_auth.currentUser.getValue()) this.isLoged = true;
      else this.isLoged = false;
    });

    _auth.loggedAdmin.subscribe(() => {
      if (_auth.loggedAdmin.getValue()) this.adminLooged = true;
      else this.adminLooged = false;
    });
  }

  ngOnInit(): void {
    AOS.init();
  }

  logout() {
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
