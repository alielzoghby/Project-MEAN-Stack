import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { DataService } from '../data.service';

// declare let AOS: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  popularBooks: any;
  categoerys: any;
  categoryBooks: any;
  authors: any;
  selectedIndex: number = -1;
  allQuote = [
    {
      quote:
        'The more that you read, the more things you will know. The more that you learn, the more places you’ll go',
      says: 'Dr. Seuss',
    },
    {
      quote:
        'A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only',
      says: 'George R.R. Martin',
    },
    {
      quote: 'Never trust anyone who has not brought a book with them.',
      says: 'Lemony Snicket',
    },
    {
      quote:
        'You can never get a cup of tea large enough or a book long enough to suit me.',
      says: 'C.S. Lewis',
    },
    {
      quote:
        'Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book',
      says: 'John Green',
    },
    {
      quote:
        'If one cannot enjoy reading a book over and over again, there is no use in reading it at all.',
      says: 'Oscar Wilde',
    },
  ];
  quote: any;

  constructor(private _data: DataService) {}

  getPopularBooks() {
    this._data.getData('/book/popular/books').subscribe(
      (res) => {
        this.popularBooks = res;
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
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getAllBooks() {
    this._data.getData('/book/').subscribe(
      (res: any) => {
        this.categoryBooks = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getPopularAuthor() {
    this._data.getData('/author/').subscribe(
      (res: any) => {
        this.authors = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    AOS.init({ disable: 'mobile' });
    AOS.refresh();
    this.getAllCategores();
    this.getPopularBooks();
    this.getPopularAuthor();
    this.getAllBooks();
    this.quote = this.allQuote[Math.floor(Math.random() * 6)];
  }
}
