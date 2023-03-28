import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  constructor(private _data: DataService) {}
  get() {
    console.log(123);
    this._data.get().subscribe((res) => {
      console.log(res);
    });
  }
}
