import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { AuthGardGuard } from '../auth-gard.guard';
import { OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css'],
})
export class AuthorPageComponent {
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';

  @ViewChild('staticAlert', { static: false }) staticAlert!: NgbAlert;
  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert!: NgbAlert;

  public changeSuccessMessage() {
    this._success.next('shelf book changed');
  }
  // ////////////////////////////////////////////
  Math = Math;
  authorData: any;
  authorBooks: any;
  userBooks: any = [];
  gotUserBooks: any = [];
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
    private _auth: AuthService
  ) {
    _auth.currentUser.subscribe((res) => {
      if (_auth.currentUser.getValue()) this.isLogged = true;
      else this.isLogged = false;
    });

    this.id = this.router.snapshot.params['id'];
  }

  onSelected(item: any, shelf: string) {
    console.log(shelf);

    this._Author
      .postData('/userBooks/', { bookId: item, shelf: shelf })
      .subscribe(
        (res) => {},
        (err) => {
          console.log(err);
        }
      );
    this.changeSuccessMessage();
  }

  getshelf(id: string): string {
    this.temp4 = this.userBooks.filter((res: any) => {
      if (res.bookId._id == id) {
        return res.shelf;
      }
    });

    return this.temp4[0].shelf;
  }

  ngOnInit(): void {
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
        this.userBooks = res.books;
      });

    setTimeout(() => this.staticAlert.close(), 20000);

    this._success.subscribe((message) => (this.successMessage = message));
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }
  ngOnDestroy(): void {}
}
