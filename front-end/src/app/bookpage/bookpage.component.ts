import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css'],
})
export class BookpageComponent {
  id: string = '';
  Math = Math;
  commentInput: any;
  sub: any;
  sub2: any;
  bookDetail: any;

  userData: any;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _data: DataService
  ) {

    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.sub = this._data.getData(`/book/${this.id}`).subscribe((res) => {
      this.bookDetail = res;
      console.log(this.bookDetail)
    });

    this.sub2 = this._data.getData(`/userBooks/book/${this.id}`).subscribe((res: any) => {
    this.userData = res

    if(this.userData ){
          console.log(this.userData.books[0])
    }else{
      this.userData.books[0].shelf="none"
      this.userData.rating = 0
    }

    });

  }

  getRating():number{

    if(!this.userData){
      return 0
    }
    else{
      return this.userData.rating
    }

  }

  getshelf():string{

    if(!this.userData){
      return "none"
    }
    else{
      return this.userData.books[0].shelf
    }

  }

  onSelected(i: any, selectedShelf: string) {
    this._data
      .postData('/userBooks/', {
        bookId: i,
        shelf: selectedShelf,
      })
      .subscribe((res) => {
        if (res) {
        }
        console.log(res);
      });
  }

  UpdateRating(value: number) {
    this.sub.rating = value;
    this._data
      .patchData('/userBooks/rating', {
        bookId: this.id,
        rating: value,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
  addReview() {
    console.log(this.commentInput);
    this._data
      .patchData('/userBooks/add/review', {
        bookId: this.id,
        review: this.commentInput,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }

  ngOnInit(): void {

  
   
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
