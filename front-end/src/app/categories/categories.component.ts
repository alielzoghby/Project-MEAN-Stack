import { Component, OnInit } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
}
