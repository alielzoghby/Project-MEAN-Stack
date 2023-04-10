import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addauthors',
  templateUrl: './addauthors.component.html',
  styleUrls: ['./addauthors.component.css'],
})
export class AddauthorsComponent {
  posts: any;
  p: number = 1;

  authors: any = [
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      firstName: 'Ahmed',
      lastName: 'Ali',
      dateOfBirth: '1-1-1980',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      firstName: 'Ahmed',
      lastName: 'Ali',
      dateOfBirth: '1-1-1980',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      firstName: 'Ahmed',
      lastName: 'Ali',
      dateOfBirth: '1-1-1980',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      firstName: 'Ahmed',
      lastName: 'Ali',
      dateOfBirth: '1-1-1980',
    },
    {
      _id: '6433f6ebcd5a5629b6cffeaf',
      firstName: 'Ahmed',
      lastName: 'Ali',
      dateOfBirth: '1-1-1980',
    },
  ];

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  authorForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    dateOfBirth: new FormControl(null, Validators.required),
    photo: new FormControl(null, Validators.required),
  });

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.authorForm.get('photo')?.setValue(file);
  }

  getAuthors() {}

  postAuthor(form: FormGroup) {
    console.log(form.value);
    this.authorForm.reset();
  }

  deleteAuthor() {}
  botAuthor() {}

  open(content: any) {
    this.modalService.open(content);
  }
}
