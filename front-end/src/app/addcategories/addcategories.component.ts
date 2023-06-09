import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css'],
})
export class AddcategoriesComponent implements OnInit {
  @Input() apiData!: BehaviorSubject<any>;

  @ViewChild('deleteC') delete!: HTMLElement;
  @ViewChild('updateC') update!: HTMLElement;
  @ViewChild('alert') alert!: HTMLElement;

  i: any;
  deleteId: string = '';
  updateId: any = '';
  editingIndex = -1;
  message: any;
  error: any;

  categories: any;
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

  categorieForm = new FormGroup({
    name: new FormControl(null, Validators.required),
  });

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
    this._data
      .getData(`/backOffice/category/?page=${this.curentPage}`)
      .subscribe(
        (res: any) => {
          this.categories = res.categories;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  /////////////////////////////////Get METHOD

  getCatagorys() {
    this._data.getData('/backOffice/category').subscribe(
      (res: any) => {
        let data = this.apiData.getValue();
        this.totalItem = data.totalBooks;
        this.categories = data.categories;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /////////////////////////////////POST METHOD
  postCategorie(form: FormGroup) {
    this._data.postData('/backOffice/category/', form.value).subscribe(
      (res) => {
        this.message = 'added Success';
        this.error = false;
        this.categories.unshift(res);
        // this.getCatagorys();
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

    this.categorieForm.reset();
  }
  //
  /////////////////////////////////DELETE METHOD
  getAlertDelete(event: any, i: any) {
    this.i = i;
    this.deleteId = event.target.id;
    this.modalService.open(this.delete);
  }

  deleteCategorie() {
    this._data.deleteData(`/backOffice/category/${this.deleteId}`).subscribe(
      (res) => {
        this.message = 'delete Success';
        this.error = false;
        this.categories.splice(this.i, 1);
        // this.getCatagorys();
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

  putCategorie() {
    let id = this.categories[this.i]._id;

    console.log(id);
    console.log(this.updateId);

    this._data.putData(`/backOffice/category/${id}`, this.updateId).subscribe(
      (res) => {
        this.message = 'Update Success';
        this.error = false;
        // this.getCatagorys();
      },
      (err) => {
        this.error = err.error.message;
        this.message = false;
      }
    );

    setTimeout(() => {
      this.error = false;
      this.message = false;
    }, 5);
  }

  ///////////////////////////////////////////
  ngOnInit(): void {
    this.apiData.subscribe((res) => {
      let data = this.apiData.getValue();
      this.totalItem = data.totalBooks;
      this.categories = data.categories;
    });
  }
}
