import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
data:any;
paginationCount = 0
Datashown:any=[]
paginationItem:Array<number>= []
totalItem = 1;
curentPage = 1

constructor(private _authorServices :DataService){
  this.data=this._authorServices.getData('/author/getAuthors/').subscribe((res)=>{
    let data:any = res
   this.Datashown = data.authors
   this.totalItem = data.totalAuthors
   console.log(this.Datashown )
  })
}
  
getPaginatian() {
  this._authorServices .getData(`/author/getAuthors/?page=${this.curentPage}`).subscribe(
    (res: any) => {
      this.Datashown = res.authors.reverse();
    },
    (err) => {
      console.log(err);
    }
  );
  
}}
