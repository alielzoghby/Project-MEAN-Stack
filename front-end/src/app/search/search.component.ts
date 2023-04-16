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
  tableVisible = false;
  massage = '';

  constructor(private _data: DataService) {}
  onKeySearch(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (event.keyCode != 13) {
        this._data.getData(`/book/search/${event.target.value}`).subscribe(
          (res: any) => {
            this.massage = '';
            this.data = res;
            if (res.length == 0) this.massage = 'Not Found';
          },
          (err) => {
            this.massage = 'Not Found';
            console.log(err);
          }
        );
      }
    }, 200);
  }
  showTable() {
    this.tableVisible = true;
  }

  hideTable() {
    setTimeout(() => (this.tableVisible = false), 100);
  }
}
