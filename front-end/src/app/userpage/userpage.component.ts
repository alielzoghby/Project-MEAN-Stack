import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthGardGuard } from '../auth-gard.guard';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
})
export class UserpageComponent implements OnInit {
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';

  @ViewChild('staticAlert', { static: false }) staticAlert!: NgbAlert;
  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert!: NgbAlert;

  public changeSuccessMessage() {
    this._success.next('shelf book changed');
  }
  // ////////////////////////////////////////////

  shelf: string = 'ALL';
  shelves: string[] = ['ALL', 'Read', 'want to read', 'Reading'];
  pos: number = 0;
  data: any;
  AvgRated: number = 0;
  AvgUnRated: number = 0;
  userRated: number = 0;
  userUnrated: number = 0;
  shownData: any;
  rating: number = 0;
  Math = Math;
  authorName: string = '';
  user: any;
  all: any;
  read: any;
  wantToRead: any;
  reading: any;

  constructor(private _auth: AuthGardGuard, private _userBooks: DataService) {}

  changeShelf(choosenShelf: string) {
    this.shelf = choosenShelf;
    if (this.shelf != 'ALL') {
      this.shownData = this.data[0].books.filter((item: any) => {
        return item.shelf == this.shelf;
      });
    } else {
      this.shownData = this.data[0].books;
    }
  }

  onSelected(item: any, shelf: string) {
    this._userBooks
      .patchData('/userBooks/shelf', { bookId: item.bookId._id, shelf: shelf })
      .subscribe((res) => {
        console.log(res);
      });
    this.changeSuccessMessage();
    this._userBooks.getData('/userBooks/all').subscribe((res) => {
      this.data = res;
    });
  }

  UpdateRating(item: any, value: number) {
    console.log(item.bookId._id);
    item.rating = value;
    this._userBooks
      .patchData('/userBooks/rating', {
        bookId: item.bookId._id,
        rating: value,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }

  getBooks() {
    this._userBooks.getData('/userBooks/all').subscribe((res) => {
      this.data = res;
      this.shownData = this.data[0].books;
    });
  }

  ngOnInit(): void {
    this.getBooks();
    this._userBooks.getData('/user/profile').subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });

    setTimeout(() => this.staticAlert.close(), 20000);

    this._success.subscribe((message) => (this.successMessage = message));
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }
  ngOnDestroy(): void {}
}
