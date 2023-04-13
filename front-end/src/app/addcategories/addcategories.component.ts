import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css'],
})
export class AddcategoriesComponent implements OnInit {
  @ViewChild('deleteC') delete!: HTMLElement;
  @ViewChild('updateC') update!: HTMLElement;

  i: any;
  deleteId: string = '';
  updateId: any = '';
  editingIndex = -1;

  allCategories: any;
  totalItem = 40;
  curentPage = 4;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private _data: DataService
  ) {
    // customize default values of modals used by this component tree
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

  /////////////////////////////////GET METHOD
  getCategories() {
    // write here number of page whate do you wont
    this.allCategories = [
      {
        name: 'kids',
        numberOfBooks: 0,
        _id: '6433f6ebcd5a5629b6cffeaa',
        id: 1,
        __v: 0,
      },
      {
        name: 'kids',
        numberOfBooks: 0,
        _id: '6433f6ebcd5a5629b6cffeab',
        id: 1,
        __v: 0,
      },
      {
        name: 'kids',
        numberOfBooks: 0,
        _id: '6433f6ebcd5a5629b6cffeac',
        id: 1,
        __v: 0,
      },
    ];
  }

  /////////////////////////////////POST METHOD
  postCategorie(form: FormGroup) {
    console.log(form.value);
    this.categorieForm.reset();
  }

  /////////////////////////////////DELETE METHOD
  getAlertDelete(event: any) {
    this.deleteId = event.target.id;
    this.modalService.open(this.delete);
    console.log();
  }

  deleteCategorie() {
    console.log(this.deleteId);

    this.getCategories();
  }

  /////////////////////////////////BOT METHOD
  getAlertUpdate(form: any, i: any) {
    this.i = i;
    this.updateId = form.value;
    this.modalService.open(this.update);
  }

  botCategorie() {
    console.log(this.updateId, this.allCategories[this.i]._id);
  }

  ///////////////////////////////////////////
  ngOnInit(): void {
    this.getCategories();
  }
}
