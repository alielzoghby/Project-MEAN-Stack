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

  books = [
    {
      id: 1,
      name: 'Portrait photography',
      author: 'ali',
    },
    {
      id: 2,

      name: 'Portrait photography',
      author: 'samy',
    },
    {
      id: 3,

      name: 'Portrait photography',
      author: 'nada',
    },
    {
      id: 4,
      name: 'Portrait photography',
      author: 'alaa',
    },
    {
      id: 5,
      name: 'Portrait photography',
      author: 'hager',
    },
    {
      id: 6,
      name: 'Portrait photography',
      author: 'mn',
    },
    {
      id: 7,
      name: 'Portrait photography',
      author: 'mona',
    },
    {
      id: 8,
      name: 'Portrait photography',
      author: 'samar',
    },
    {
      id: 9,
      name: 'Portrait photography',
      author: 'hosam',
    },
  ];
}
