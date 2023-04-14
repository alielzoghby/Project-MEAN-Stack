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
  Math = Math 
  commentInput:any  ;
  sub :any;
  sub2:any;
  bookDetail:any = {
    name: "test Book",
    categoryId: {    
      name:"Test Category",
      numberOfBooks:10        // authorId. firstName  authorId. lastNamecategoryId.name   
    },
    authorId: {
      firstName:"nada",
      lastName:"hisham"
    
    },
  
    cover: "../../assets/image/team-member3.jpg"
    ,
    numberOfRatings:3,
  
    sumOfRatings:6,
    description: "tdtykfkhbjnkjnjhvgcuc",
    reviews: [
      {
        review : "dfgfuvgWDVLJBKJSDVwefbkjbKHEWVgwevnlkmw;bvjHWEIF",
       userId:{
       firstName: "yasin",
       lastName: "hisham",
       photo:"../../assets/images/team-member5.jpg"
       }
      },
      {
        review : "dfgfuvgWDVLJBKJSDVwefbkjbKHEWVgwevnlkmw;bvjHWEIF",
       userId:{
       firstName: "yasmin",
       lastName: "hisham",
       photo:"../../assets/images/team-member7.jpg"
       }
      }
   ]
  }

  userData = {
    bookId:{
         id: 123445,
         name:"hell",
         categoryId:"lhkjbkb",
         authorId:"lhkjbhvjhvjv",
         averageRating: 5,
         cover:"../../assets/images/",
         numberOfRatings: 4,
         sumOfRatings: 11,
         description:"jkfkjgnjknggergkjekbgbkgjgnkntkntgntgbk ",
         reviews: [
           {
             userId:"lhkgjgj",
             review: "ohiugiugigigig",
           },
         ],
       },
     
   shelf: "Reading",
   rating:5,
   review:"",
   authorName:"hany"
  }
  
     constructor(
      private _ActivatedRoute: ActivatedRoute,
      private _data: DataService
    ){
      
   
  
    }

  



    onSelected(i:any,selectedShelf:string){
    console.log(selectedShelf,i)
    }

    UpdateRating(value:number){

    this.sub.rating=value
   this._data.patchData('/userBooks/rating',value).subscribe((res)=>{
    console.log(res)
  })
    }
 addReview(){

  console.log(this.commentInput)
  this._data.patchData('/userBooks/add/review',this.commentInput).subscribe((res)=>{
    console.log(res)
  })

 }


  ngOnInit(): void {
    // this.id = this._ActivatedRoute.snapshot.params['id'];
    // this.sub = this._data.getData(`/books/${this.id}`).subscribe((res) => {
    //   this.bookDetail = res;
    // });

    // this.sub2 = this._data.getData('/userBooks/all').subscribe((res)=>{
    //   this.userData=res.filter((item)=>{
    //     if(item.bookId._id==this.bookDetail._id){
    //       return item
    //     }
    //   })
    // })
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
