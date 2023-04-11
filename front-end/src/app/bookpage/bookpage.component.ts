import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css'],
})
export class BookpageComponent {
  

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    
  ) {}

  ngOnInit(): void {
    // this.id = this._ActivatedRoute.snapshot.params['id'];
    // this.sub = this._data.getData(`/books/${this.id}`).subscribe((res) => {
    //   this.bookDetail = res;
    // });
  }

  // ngOnDestroy(): void {
    
  // }
}
