import { Component } from '@angular/core';
import { AuthGardGuard } from '../auth-gard.guard';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
})
export class UserpageComponent {
  shelf: string = 'ALL';
  shelves: string[] = ['ALL', 'Read', 'want to read', 'Reading'];
  pos: number = 0;
  data: any;
  AvgRated: number = 0;
  AvgUnRated: number = 0;
  userRated: number = 0;
  userUnrated: number = 0;
  shownData: any = [];
  rating: number = 0;
  Math = Math;
  temp: any;
  temp2:any;
  authorName:string=""

  constructor(private _auth: AuthGardGuard, private _userBooks: DataService) {
    this.temp = this._userBooks.getData('/userBooks/all').subscribe((res) => {
      this.data = res;
      this.shownData = this.data[0].books;
      
      console.log(this.data[0].books)
      
    });
  }

  changeShelf(choosenShelf: string) {
    this.shelf=choosenShelf
   
    if(this.shelf!="ALL"){
      
      this.shownData = this.data[0].books.filter((item:any)=>{
     return item.shelf==this.shelf  
      })
         }else{
          this.shownData = this.data[0].books
         }

       
        
        }
        
  

  onSelected(item:any,shelf:string){
   
      this._userBooks.patchData('/userBooks/shelf',{"bookId":item.bookId._id,
      "shelf":shelf}).subscribe((res)=>{
        console.log(res)
      })
    
    }

    getAuthorName(id:string){
     this.temp2= this._userBooks.getData(`/author/${id}`).subscribe((res:any)=>{
      
        this.authorName = `${res.firstName} ${res.lastName}`
     })
     
      return this.authorName
      
    }



  UpdateRating(item: any, value: number) {
    console.log(item.bookId._id)
    item.rating = value;
    this._userBooks.patchData('/userBooks/rating',{"bookId":item.bookId._id,
    "rating":value}).subscribe((res)=>{
      console.log(res)
    }) 
  }

  ngOnDestroy(): void {
   
  }
}
