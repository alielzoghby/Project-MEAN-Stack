import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css'],
})
export class AddbooksComponent implements OnInit {
  @Input() data: any;

  @ViewChild('deleteC') delete!: HTMLElement;
  @ViewChild('updateC') update!: HTMLElement;
  @ViewChild('updateForm') formUpdate!: NgForm;

  i: any;
  deleteId: string = '';
  updateId: string = '';
  editingIndex = -1;

  totalItem = 0;
  curentPage = 1;

  books: any;
  catagorys: any;
  authors: any;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private _data: AuthService
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
  }

  /////////////////////////////////BOT METHOD
  getAlertUpdate(form: any) {
    this.updateId = form.value;
    this.modalService.open(this.update);
  }

  botBook() {
    console.log(this.updateId);
  }

  ngOnInit(): void {}
}
