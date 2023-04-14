import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../services/author.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import {AuthGardGuard} from '../auth-gard.guard';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent {
Math = Math 
authorData:any;
id :string="";
temp:any;
temp2:any;
isLogged:boolean = false

authorBooks:any;


constructor(private router:ActivatedRoute , private _Author:DataService , private _Auth:AuthGardGuard){
       this.isLogged = _Auth.islogged
       this.id = this.router.snapshot.params['id'];

        this.temp = _Author.getData(`/author/${this.id}`).subscribe((res)=>{
          console.log(res)
          this.authorData=res
        })

        this.temp2 = _Author.getData("/book/").subscribe((res:any)=>{
                this.authorBooks=res.valueOf().data.filter((item:any)=>{
                  if(item.authorId==this.id){
                    return item
                  }
                })
                console.log(this.authorBooks)
        })

}}
