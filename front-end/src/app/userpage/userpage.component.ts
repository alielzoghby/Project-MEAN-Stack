import { Component } from '@angular/core';
import { AuthGardGuard } from '../auth-gard.guard'; 
import { UserBooksService } from '../services/user-books.service';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  shelve:string="ALL"
  rate:string ="&#xf005;"
  shelves:string[] = ["ALL","Read","Want to Read","Currently Read"]
  pos:number = 0 ;
  isLogged   = false;
  data:Array<any> = []
  AvgRated:number=0
  AvgUnRated:number=0
  userRated:number=0
  userUnrated:number=0

/**
   *
   */
  constructor(private _auth:AuthGardGuard, private _userBooks:UserBooksService) {
   this.isLogged = this._auth.islogged; 
   this.data     = this._userBooks.getAllUserBooks()
  }
  
changeShelve(choosenShelve:string ,){

this.shelve=choosenShelve
}
next(){
  this.pos += 1;
  if(this.pos==4){
    this.pos=0
  }
  this.shelve=this.shelves[this.pos]
  console.log(this.shelves[this.pos])
}

prev(){

  this.pos -= 1;
  if(this.pos==-1){
    this.pos=3
  }
  this.shelve=this.shelves[this.pos]
  console.log(this.shelves[this.pos])

}

}
