import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addauthors',
  templateUrl: './addauthors.component.html',
  styleUrls: ['./addauthors.component.css'],
})
export class AddauthorsComponent {
  @ViewChild('deleteC') delete!: HTMLElement;
  @ViewChild('updateC') update!: HTMLElement;
  @ViewChild('updateForm') formUpdate!: NgForm;

  deleteId: string = '';
  updateId: string = '';

  editingIndex = -1;

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

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private _data: DataService
  ) {
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

  onFileSelectedFormUpdate(event: any) {
    const file = event.target.files[0];
    this.formUpdate.value.cover = file;
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
  getAuthors() {}

  /////////////////////////////////POST METHOD
  postAuthor(form: FormGroup) {
    console.log(form.value);
    this.authorForm.reset();
  }

  /////////////////////////////////DELETE METHOD
  getAlertDelete(event: any) {
    this.deleteId = event.target.id;
    this.modalService.open(this.delete);
  }

  deleteAuthor() {
    console.log(this.deleteId);
    this.getAuthors();
  }

  /////////////////////////////////BOT METHOD
  getAlertUpdate(form: any) {
    this.updateId = form.value;
    this.modalService.open(this.update);
    console.log(form);
    console.log(form.value);
  }

  botAuthor() {
    console.log(this.updateId);
  }
}
