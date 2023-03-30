import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
declare let AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private _data: DataService) {}
  get() {
    console.log(123);
    this._data.get().subscribe((res) => {
      console.log(res);
    });
  }
  ngOnInit(): void {
    AOS.init();
  }
}
