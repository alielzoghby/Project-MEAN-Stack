import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css'],
})
export class AddbooksComponent {
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
  });

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.bookForm.get('image')?.setValue(file);
  }

  getBooks() {
    this._data.get().subscribe((res) => {});
  }

  postBook(form: FormGroup) {
    console.log(form.value);

    this.bookForm.reset();
  }

  deleteBook() {}
  botBook() {}

  open(content: any) {
    this.modalService.open(content);
  }
}
