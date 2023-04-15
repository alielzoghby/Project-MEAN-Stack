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
    
    
  ) {
    this.isLogged = _Auth.islogged;
    this.id = this.router.snapshot.params['id'];

    this.temp = _Author.getData(`/author/${this.id}`).subscribe((res) => {
      this.authorData = res;
      console.log(this.authorData);
    });

    this.temp2 = _Author
      .getData(`/author/books/${this.id}`)
      .subscribe((res: any) => {
        this.authorBooks = res.data;
      });

   

  }
 


  onSelected(item: any, shelf: string) {
    
      this._Author.postData('/userBooks/', { bookId: item, shelf: shelf }).subscribe((res)=>{
        console.log(res)
      });

  }

  ngOnDestroy(): void {}
}
