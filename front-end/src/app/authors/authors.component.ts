import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
  data: any = [];
  countData: number = 0;
  paginationCount = 0;
  Datashown: any = [];
  paginationItem: Array<number> = [];
  constructor(private _authorServices: DataService) {
    this.getAllAuthors();
  }
  getAllAuthors() {
    this.data = this._authorServices
      .getData('/author/getAuthors')
      .subscribe((res) => {
        console.log(res);
        this.Datashown = res;
      });
  }

  setAuthor() {}
}
