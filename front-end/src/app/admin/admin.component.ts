import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  books: any;
  catagorys: any;
  authors: any;

  constructor(private _data: AuthService) {}

  getBooks() {
    this._data.getData('/backOffice/book/').subscribe(
      (res: any) => {
        this.books = res.data;
        console.log(this.books);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getAuthors() {
    this._data.getData('/backOffice/author/').subscribe(
      (res: any) => {
        this.authors = res;
        console.log(this.authors);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getCatagorys() {
    this._data.getData('/backOffice/book/').subscribe(
      (res: any) => {
        this.catagorys = res;
        console.log(this.catagorys);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.getBooks();
    this.getCatagorys();
    this.getAuthors();
  }
}
