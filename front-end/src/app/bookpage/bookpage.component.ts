import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css'],
})
export class BookpageComponent {
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';

  @ViewChild('staticAlert', { static: false }) staticAlert!: NgbAlert;
  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert!: NgbAlert;

  public changeSuccessMessage() {
    this._success.next('book is added to your shelf');
  }
  // ////////////////////////////////////////////
  id: string = '';
  Math = Math;
  commentInput: any;
  sub: any;
  sub2: any;
  bookDetail: any;
  rating: any;
  userData: any;
  islogged: boolean = false;
  reviews: any;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _data: DataService,
    private _auth: AuthService
  ) {
    _auth.currentUser.subscribe((res) => {
      if (_auth.currentUser.getValue()) this.islogged = true;
      else this.islogged = false;
    });

    this.id = this._ActivatedRoute.snapshot.params['id'];
  }

  getshelf(): string {
    if (!this.userData) {
      return 'none';
    } else {
      return this.userData.shelf;
    }
  }

  onSelected(item: any, shelf: string) {
    console.log(shelf);

    this._data
      .postData('/userBooks/', { bookId: item, shelf: shelf })
      .subscribe(
        (res) => {},
        (err) => {
          console.log(err);
        }
      );
    this.changeSuccessMessage();
  }

  UpdateRating(value: number) {
    this.rating = value;
    this._data
      .patchData('/userBooks/rating', {
        bookId: this.id,
        rating: value,
      })
      .subscribe(
        (res) => {},
        (err) => {
          console.log(err);
        }
      );
  }

  addReview() {
    this._data
      .patchData('/userBooks/add/review', {
        bookId: this.id,
        review: this.commentInput,
      })
      .subscribe((res: any) => {
        res.books.filter((item: any) => {
          if (item.bookId == this.id) {
            this.reviews.shift();
            this.reviews.unshift({ _id: 'you', review: this.commentInput });
          }
        });
      });
  }

  ngOnInit(): void {
    this.sub = this._data.getData(`/book/${this.id}`).subscribe((res) => {
      this.bookDetail = res;
      this.reviews = this.bookDetail.reviews.reverse();
      console.log(this.reviews);
    });

    this.sub2 = this._data
      .getData(`/userBooks/book/${this.id}`)
      .subscribe((res: any) => {
        this.userData = res;
        if (!this.userData) {
          this.rating = 0;
        } else {
          this.rating = this.userData.rating;
        }
      });

    setTimeout(() => this.staticAlert.close(), 20000);

    this._success.subscribe((message) => (this.successMessage = message));
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
