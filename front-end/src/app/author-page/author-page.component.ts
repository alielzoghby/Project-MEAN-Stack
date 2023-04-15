import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { AuthGardGuard } from '../auth-gard.guard';
import { OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css'],
})
export class AuthorPageComponent {
  Math = Math;
  authorData: any;
  authorBooks: any;
  userBooks: any = [];
  gotUserBooks:any=[]
  id: string = '';
  temp: any;
  temp2: any;
  temp3: any;
  temp4: any;
  isLogged: boolean = false;
  rating: number = 0;

  constructor(
      
    private router: ActivatedRoute,
    private _Author: DataService,
    private _Auth: AuthGardGuard,
    private _authorService: DataService
  ) {
    
    this.isLogged = this._Auth.islogged;
    this.id = this.router.snapshot.params['id'];

    this.temp = this._Author.getData(`/author/${this.id}`).subscribe((res) => {
      this.authorData = res;
      
    });

    this.temp2 = this._Author
      .getData(`/author/books/${this.id}`)
      .subscribe((res: any) => {
        this.authorBooks = res.data;
      });

      this.temp3 = this._Author
      .getData(`/userBooks/all`)
      .subscribe((res: any) => {
        
        this.userBooks = res[0].books;
      });
      
  }

  onSelected(item: any, shelf: string) {
    this._Author
      .postData('/userBooks/', { bookId: item, shelf: shelf })
      .subscribe((res) => {
   
      });
  }

  getshelf(id:string):string{
    this.temp4 = this.userBooks.filter((res:any)=>{
        if(res.bookId._id==id) {
          
          return res.shelf
        }
    })
    
    return this.temp4[0].shelf
  }

  
ngOnInit(): void {
 
  
    

  }
  ngOnDestroy(): void {}
}
