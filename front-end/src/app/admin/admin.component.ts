import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  books = new BehaviorSubject(null);
  catagorys = new BehaviorSubject(null);
  authors = new BehaviorSubject(null);

  constructor(private _data: AuthService) {}

  getBooks() {
    this._data.getData('/backOffice/book/').subscribe(
      (res: any) => {
        this.books.next(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getAuthors() {
    this._data.getData('/backOffice/author/').subscribe(
      (res: any) => {
        this.authors.next(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCatagorys() {
    this._data.getData('/backOffice/category').subscribe(
      (res: any) => {
        this.catagorys.next(res);
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
