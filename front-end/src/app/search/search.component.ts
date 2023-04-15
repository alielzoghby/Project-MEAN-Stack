import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  data!: any;

  timeout: any = null;
  constructor(private _data: DataService) {}
  onKeySearch(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (event.keyCode != 13) {
        this._data.getData(`/book/search/${event.target.value}`).subscribe(
          (res) => {
            this.data = res;
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }, 500);
  }
}
