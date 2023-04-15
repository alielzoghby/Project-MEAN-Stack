import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
declare let AOS: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  selectedIndex: number = -1;
  totalItem = 1;
  curentPage = 1;
  idCategory: any;
  categoerys: any;
  categoryBooks: any;
  constructor(private _data: DataService) {}

  getAllBooks() {
    this._data.getData('/book/').subscribe(
      (res: any) => {
        this.categoryBooks = res.data;
        this.totalItem = res.totalBooks;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getAllCategores() {
    this._data.getِAllData('/category/').subscribe(
      (res) => {
        this.categoerys = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCategoryBooks(id: any) {
    this._data.getData(`/book/category/${id}`).subscribe(
      (res: any) => {
        this.categoryBooks = res.data;
        this.totalItem = res.totalBooks;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getPaginatian() {
    let id = '';
    if (this.idCategory) {
      this._data
        .getData(`/book/category/${this.idCategory}/?page=${this.curentPage}`)
        .subscribe(
          (res: any) => {
            this.categoryBooks = res.data.reverse();
            this.totalItem = res.totalBooks;
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      this._data.getData(`/book/?page=${this.curentPage}`).subscribe(
        (res: any) => {
          this.categoryBooks = res.data;
          this.totalItem = res.totalBooks;
        },
        (err) => {
          console.log(err);
        }
      );
    }

    console.log(id);
  }

  ngOnInit(): void {
    this.getAllCategores();
    this.getAllBooks();
  }
}
