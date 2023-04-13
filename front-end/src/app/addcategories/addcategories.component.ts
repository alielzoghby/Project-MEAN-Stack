import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css'],
})
export class AddcategoriesComponent implements OnInit {
  @Input() data: any;
  @ViewChild('deleteC') delete!: HTMLElement;
  @ViewChild('updateC') update!: HTMLElement;

  i: any;
  deleteId: string = '';
  updateId: any = '';
  editingIndex = -1;

  categories: any;
  totalItem = 0;
  curentPage = 1;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private _data: AuthService
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
  }

  /////////////////////////////////BOT METHOD
  getAlertUpdate(form: any, i: any) {
    this.i = i;
    this.updateId = form.value;
    this.modalService.open(this.update);
  }

  botCategorie() {
    console.log(this.updateId, this.categories[this.i]._id);
  }

  ///////////////////////////////////////////
  ngOnInit(): void {}
}
