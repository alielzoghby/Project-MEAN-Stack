import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let AOS: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router) {}
  ngOnInit(): void {
    AOS.init();
  }
}
