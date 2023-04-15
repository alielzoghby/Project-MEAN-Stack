import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addauthors',
  templateUrl: './addauthors.component.html',
  styleUrls: ['./addauthors.component.css'],
})
export class AddauthorsComponent implements OnInit {
  @Input() apiData!: BehaviorSubject<any>;

  @ViewChild('deleteC') delete!: HTMLElement;
  @ViewChild('updateC') update!: HTMLElement;
  @ViewChild('updateForm') formUpdate!: NgForm;
  @ViewChild('alert') alert!: HTMLElement;

  i: any;
  deleteId: string = '';
  updateId: string = '';
  editingIndex = -1;
  message: any;
  error: any;

  authors: any;
  totalItem = 1;
  curentPage = 1;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private _data: DataService
  ) {
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
    dob: new FormControl(null, Validators.required),
    image: new FormControl(null, Validators.required),
    bio: new FormControl(null),
  });

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.authorForm.get('image')?.setValue(file);
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
    this._data.getData(`/backOffice/author/?page=${this.curentPage}`).subscribe(
      (res: any) => {
        this.authors = res.authors.reverse();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /////////////////////////////////POST METHOD
  postAuthor(form: FormGroup) {
    this._data.postData('/backOffice/author/', form.value).subscribe(
      (res) => {
        this.message = 'added Success';
        this.error = false;
        this.authors.unshift(res);
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

    this.authorForm.reset();
  }

  /////////////////////////////////DELETE METHOD
  getAlertDelete(event: any, i: any) {
    this.i = i;
    this.deleteId = event.target.id;
    this.modalService.open(this.delete);
  }

  deleteAuthor() {
    this._data.deleteData(`/backOffice/author/${this.deleteId}`).subscribe(
      (res) => {
        this.message = 'delete Success';
        this.error = false;
        this.authors.splice(this.i, 1);
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

  potAuthor() {
    let id = this.authors[this.i]._id;
    this._data.patchData(`/backOffice/author/${id}`, this.updateId).subscribe(
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
    this.apiData.subscribe((res) => {
      let data = this.apiData.getValue();
      this.totalItem = data.totalAuthors;
      this.authors = data.authors.reverse();
    });
  }
}
