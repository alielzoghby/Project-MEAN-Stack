import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css'],
})
export class AddbooksComponent implements OnInit {
  @Input() booksApi!: BehaviorSubject<any>;
  @Input() authorsApi!: BehaviorSubject<any>;
  @Input() catagorysApi!: BehaviorSubject<any>;

  @ViewChild('deleteC') delete!: HTMLElement;
  @ViewChild('updateC') update!: HTMLElement;
  @ViewChild('updateForm') formUpdate!: NgForm;

  i: any;
  deleteId: string = '';
  updateId: any = '';
  editingIndex = -1;
  message: any;
  error: any;

  books: any;
  categories: any;
  authors: any;

  totalItem = 0;
  curentPage = 1;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private _data: DataService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  bookForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    categoryId: new FormControl(null, Validators.required),
    authorId: new FormControl(null, Validators.required),
    image: new FormControl(null, Validators.required),
    discription: new FormControl(null, Validators.required),
  });

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.bookForm.get('image')?.setValue(file);
  }

  onFileSelectedFormUpdate(event: any) {
    const file = event.target.files[0];
    this.formUpdate.value.image = file;
  }

  open(content: any) {
    this.modalService.open(content);
  }

  editItem(index: number) {
    this.editingIndex = index;
  }

  isItemEditing(index: number) {
    return index === this.editingIndex;
  }

  getPaginatian() {
    this._data.getData(`/backOffice/book/?page=${this.curentPage}`).subscribe(
      (res: any) => {
        this.books = res.data.reverse();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /////////////////////////////////POST METHOD
  postBook(form: FormGroup) {
    this._data.postData('/backOffice/book/', form.value).subscribe(
      (res) => {
        this.message = 'added Success';
        this.error = false;
        console.log(res);

        this.books.unshift(res);
      },
      (err) => {
        this.error = err.error.message;
        this.message = false;
      }
    );

    setTimeout(() => {
      this.error = false;
      this.message = false;
      console.log(this.error);
      console.log(this.message);
    }, 5000);
    this.bookForm.reset();
  }

  /////////////////////////////////DELETE METHOD
  getAlertDelete(event: any, i: any) {
    this.i = i;
    this.deleteId = event.target.id;
    this.modalService.open(this.delete);
  }

  deleteBook() {
    this._data.deleteData(`/backOffice/book/${this.deleteId}`).subscribe(
      (res) => {
        this.message = 'delete Success';
        this.error = false;
        this.books.splice(this.i, 1);
      },
      (err) => {
        this.error = err.error.message;
        this.message = false;
      }
    );

    setTimeout(() => {
      this.error = false;
      this.message = false;
    }, 5000);
  }

  /////////////////////////////////BOT METHOD
  getAlertUpdate(form: any, i: any) {
    this.i = i;
    this.updateId = form.value;
    this.modalService.open(this.update);
  }

  putBook() {
    let id = this.books[this.i]._id;

    for (const key in this.updateId) {
      if (this.updateId[key] === '') {
        delete this.updateId[key];
      }
    }

    console.log(this.updateId);

    this._data.patchData(`/backOffice/book/${id}`, this.updateId).subscribe(
      (res) => {
        this.message = 'Update Success';
        this.error = false;
      },
      (err) => {
        this.error = err.error.message;
        this.message = false;
      }
    );

    setTimeout(() => {
      this.error = false;
      this.message = false;
    }, 5000);
  }

  ngOnInit(): void {
    this.booksApi.subscribe((res) => {
      let data = this.booksApi.getValue();
      this.totalItem = data.totalBooks;
      this.books = data.data;
    });

    this._data.getِAllData('/category/').subscribe((res: any) => {
      this.categories = res;
    });

    this._data.getِAllData('/author/getAuthors/').subscribe((res: any) => {
      this.authors = res;
    });
  }
}
