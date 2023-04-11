import { Component } from '@angular/core';
import { AuthGardGuard } from '../auth-gard.guard'; 
import { UserBooksService } from '../services/user-books.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  shelf:string="ALL"
  shelves:string[] = ["ALL","Read","want to read","Reading"]
  pos:number = 0 ;
  isLogged   = false;
  data:Array<any> = []
  AvgRated:number=0
  AvgUnRated:number=0
  userRated:number=0
  userUnrated:number=0
  shownData  : Array<any> = []
  rate       :number   = 0

  constructor(private _auth:AuthGardGuard, private _userBooks:UserBooksService) {
   this.isLogged = this._auth.islogged; 
   this.data     = this._userBooks.getAllUserBooks()[0].books
   this.shownData= this.data
   
  }
  
changeShelf(choosenShelf:string ){

this.shelf=choosenShelf
if(this.shelf!="ALL"){
 this.shownData = this.data.filter((item)=>{
  if(item.shelf==this.shelf){
    return item
  }

 }) 
}
else{
  this.shownData = this.data
}

}

onSelected(i:any,selectedShelf:string){
console.log(selectedShelf,i)
}

}
