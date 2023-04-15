import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() books: any;
  sliderBooks: any;

  constructor() {}

  ngOnInit(): void {
    this.sliderBooks = this.books;
  }
}
