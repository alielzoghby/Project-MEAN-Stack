import { Component } from '@angular/core';
import { AuthGardGuard } from '../auth-gard.guard'; 
import { DataService } from '../data.service';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  shelf:string="ALL"
  shelves:string[] = ["ALL","Read","want to read","Reading"]
  pos:number = 0 ;
  data:Array<any> = []
  AvgRated:number=0
  AvgUnRated:number=0
  userRated:number=0
  userUnrated:number=0
  shownData  : Array<any> = []
  rating :number = 0;
  Math = Math
  temp:any;

  constructor(private _auth:AuthGardGuard, private _userBooks:DataService) {
  
   this.temp    = this._userBooks.getData("/userBooks/all").subscribe((res)=>{
             console.log(res)
   })
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

UpdateRating(item:any,value:number){
item.rating=value
}

}
