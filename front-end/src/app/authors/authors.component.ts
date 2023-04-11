import { Component } from '@angular/core';
import { AuthorService}from'../services/author.service'
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
data:Array<any>=[]
countData:number=0
paginationCount = 0
Datashown:Array<any>=[]
paginationItem:Array<number>= []
constructor(private _authorServices :AuthorService){
  this.getAllAuthors()
  }
  getAllAuthors(){
  //  this._authorServices.getAllAuthors().subscribe((res)=>{
  //   console.log(res)
  //  })

  this.data = this._authorServices.getAllAuthors()
  this.Datashown= this.data.slice(0, 6)
 
  }

  setAuthor(){
    
  }
}
