import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css'],
})
export class AddbooksComponent {
  @ViewChild('deleteC') delete!: HTMLElement;
  @ViewChild('updateC') update!: HTMLElement;
  @ViewChild('updateForm') formUpdate!: NgForm;

  i: any;
  deleteId: string = '';
  updateId: string = ''; 
  editingIndex = -1;

  totalItem = 40;
  curentPage = 4;

  books: any = [
    {
      averageRating: 0,
      numberOfRatings: 0,
      _id: '6433f6ebcd5a5629b6cffeaf',
      name: 'The Adventures of Sherlock Holmes',
      category: 'history',
      cover: 'sherlock.png-87226405-9d9a-4a32-8f4a-cc43ec17c031',
      reviews: [],
      author: 'Asdasdas',
      description: 'sadasdasdasdasdasdasdsadasd',
      __v: 0,
    },
    {
      averageRating: 0,
      numberOfRatings: 0,
      _id: '6433f6ebcd5a5629b6cffeaf',
      name: 'The Adventures of Sherlock Holmes',
      category: 'history',
      cover: 'sherlock.png-87226405-9d9a-4a32-8f4a-cc43ec17c031',
      reviews: [],
      author: 'Asdasdas',
      description: 'sadasdasdasdasdasdasdsadasd',
      __v: 0,
    },
    {
      averageRating: 0,
      numberOfRatings: 0,
      _id: '6433f6ebcd5a5629b6cffeaf',
      name: 'The Adventures of Sherlock Holmes',
      category: 'history',
      cover: 'sherlock.png-87226405-9d9a-4a32-8f4a-cc43ec17c031',
      reviews: [],
      author: 'Asdasdas',
      description: 'sadasdasdasdasdasdasdsadasd',
      __v: 0,
    },
    {
      averageRating: 0,
      numberOfRatings: 0,
      _id: '6433f6ebcd5a5629b6cffeaf',
      name: 'The Adventures of Sherlock Holmes',
      category: 'history',
      cover: 'sherlock.png-87226405-9d9a-4a32-8f4a-cc43ec17c031',
      reviews: [],
      author: 'Asdasdas',
      description: 'sadasdasdasdasdasdasdsadasd',
      __v: 0,
    },
    {
      averageRating: 0,
      numberOfRatings: 0,
      _id: '6433f6ebcd5a5629b6cffeaf',
      name: 'The Adventures of Sherlock Holmes',
      category: 'history',
      cover: 'sherlock.png-87226405-9d9a-4a32-8f4a-cc43ec17c031',
      reviews: [],
      author: 'Asdasdas',
      description: 'sadasdasdasdasdasdasdsadasd',
      __v: 0,
    },
  ];

  catagorys: any = [
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      category: 'history',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      category: 'history',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      category: 'history',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      category: 'history',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      category: 'history',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      category: 'history',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      category: 'history',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      category: 'history',
    },
  ];

  authors: any = [
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      firstName: 'ali',
      lastName: 'saad',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      firstName: 'ali',
      lastName: 'saad',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      firstName: 'ali',
      lastName: 'saad',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      firstName: 'ali',
      lastName: 'saad',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      firstName: 'ali',
      lastName: 'saad',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      firstName: 'ali',
      lastName: 'saad',
    },
  ];

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
    console.log(file);
    this.formUpdate.value.cover = file;
    console.log(this.formUpdate.value.cover);
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

  /////////////////////////////////GET METHOD
  getBooks() {}

  /////////////////////////////////POST METHOD
  postBook(form: FormGroup) {
    console.log(form.value);
    this.bookForm.reset();
  }

  /////////////////////////////////DELETE METHOD
  getAlertDelete(event: any) {
    this.deleteId = event.target.id;
    this.modalService.open(this.delete);
  }

  deleteBook() {
    console.log(this.deleteId);
    this.getBooks();
  }

  /////////////////////////////////BOT METHOD
  getAlertUpdate(form: any) {
    this.updateId = form.value;
    this.modalService.open(this.update);
  }

  botBook() {
    console.log(this.updateId);
  }
}
