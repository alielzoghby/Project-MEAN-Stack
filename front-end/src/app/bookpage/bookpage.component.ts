import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

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
  rating:any;
  userData: any;
  islogged:boolean=false

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _data: DataService,
    private _auth:AuthService
  ) {

    _auth.currentUser.subscribe((res) => {
      if (_auth.currentUser.getValue()) this.islogged = true;
      else this.islogged = false;
    });

    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.sub = this._data.getData(`/book/${this.id}`).subscribe((res) => {
      this.bookDetail = res;
     
    });

    this.sub2 = this._data.getData(`/userBooks/book/${this.id}`).subscribe((res: any) => {
     
    this.userData = res
    if(!this.userData){
      this.rating = 0
    }
    else{
       this.rating = this.userData.rating
    }
    
    });

    

  }



  getshelf():string{

    if(!this.userData){
      return "none"
    }
    else{
       return this.userData.shelf
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
    this.rating=value
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
