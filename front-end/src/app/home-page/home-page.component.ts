import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

declare let AOS: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    AOS.init();
  }
}
