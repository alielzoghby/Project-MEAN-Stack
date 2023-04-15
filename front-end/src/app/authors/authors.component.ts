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
constructor(private _authorServices :DataService){
  this.data=this._authorServices.getData('/author/getAuthors/').subscribe((res)=>{
    this.Datashown.push(res)
    
    
  })
  
}}
