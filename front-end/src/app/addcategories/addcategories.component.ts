import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css'],
})
export class AddcategoriesComponent {
  @ViewChild('deleteC') delete!: HTMLElement;
  @ViewChild('updateC') update!: HTMLElement;

  deleteId: string = '';
  updateId: any = '';

  allCategories: any = [
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

  /////////////////////////////////GET METHOD
  getCategories() {}

  /////////////////////////////////POST METHOD
  postCategorie(form: FormGroup) {
    console.log(form.value);
    this.categorieForm.reset();
  }

  /////////////////////////////////DELETE METHOD
  getAlertDelete(event: any) {
    this.deleteId = event.target.id;
    this.modalService.open(this.delete);
  }

  deleteCategorie() {
    console.log(this.deleteId);
    this.getCategories();
  }

  /////////////////////////////////BOT METHOD
  updateForm(index: any) {
    const categorie = this.allCategories[index];
    categorie.editable = !categorie.editable;
  }

  getAlertUpdate(index: any) {
    const categorie = this.allCategories[index];
    this.updateId = categorie;
    this.modalService.open(this.update);
  }

  botCategorie() {
    this.updateId.editable = !this.updateId.editable;
    console.log(this.updateId._id);
  }
}
