import { Component } from '@angular/core';
import { AuthorService}from'../services/author.service'
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
data:any=[]
countData:number=0
paginationCount = 0
Datashown:any=[]
paginationItem:Array<number>= []
constructor(private _authorServices :AuthorService){
  this.getAllAuthors()
  }
  getAllAuthors(){
    this.data=this._authorServices.getAllAuthors().subscribe((res)=>{
    console.log(res)
    this.Datashown=res
   })
   
   

 
  }

  setAuthor(){
    
  }
}
