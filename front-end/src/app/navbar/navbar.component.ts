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
  constructor(private _router: Router, private _auth: AuthService) {
    // if (_auth.currentUser) this.isLoged = true;
    // else this.isLoged = false;

    _auth.currentUser.subscribe((res) => {
      if (_auth.currentUser.getValue()) this.isLoged = true;
      else this.isLoged = false;
    });
  }
  ngOnInit(): void {
    AOS.init();
  }

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }
}
