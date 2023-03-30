import { Component } from '@angular/core';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  shelve:string="ALL"
  rate:string ="&#xf005;"
  shelves:string[] = ["ALL","Reading","Want to Read","Currently Read"]
  pos:number = 0 ;

  
changeShelve(choosenShelve:string){
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
