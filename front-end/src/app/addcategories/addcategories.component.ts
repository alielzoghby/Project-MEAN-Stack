import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css'],
})
export class AddcategoriesComponent {
  allCategories: any = [
    {
      name: 'kids',
      numberOfBooks: 0,
      _id: '6433f6ebcd5a5629b6cffeaf',
      id: 1,
      __v: 0,
    },
    {
      name: 'kids',
      numberOfBooks: 0,
      _id: '6433f6ebcd5a5629b6cffeaf',
      id: 1,
      __v: 0,
    },
    {
      name: 'kids',
      numberOfBooks: 0,
      _id: '6433f6ebcd5a5629b6cffeaf',
      id: 1,
      __v: 0,
    },
  ];

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  categorieForm = new FormGroup({
    name: new FormControl(null, Validators.required),
  });

  getCategories() {}

  postCategorie(form: FormGroup) {
    console.log(form.value);
    this.categorieForm.reset();
  }

  deleteCategorie() {}
  botCategorie() {}

  open(content: any) {
    this.modalService.open(content);
  }
}
