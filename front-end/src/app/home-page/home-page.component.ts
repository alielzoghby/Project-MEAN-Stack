import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

// declare let AOS: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init({ disable: 'mobile' });
    AOS.refresh();
  }
}
