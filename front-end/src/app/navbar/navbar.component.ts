import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let AOS: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbarfixed: boolean = false;
  isLoged: boolean = false;
  constructor(private _router: Router) {}

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
