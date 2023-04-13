import { Component, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';

import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  @ViewChild('content') content!: HTMLElement;

  error: string = '';
  registerForm!: FormGroup;

  constructor(
    private _router: Router,
    private modalService: NgbModal,
    private _auth: AuthService,
    config: NgbModalConfig
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.required,
      ]),
      lastName: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.required,
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('[A-Za-z1-9]+'),
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
    });

    this.registerForm.addValidators(
      matchValidator(
        this.registerForm.get('password'),
        this.registerForm.get('confirmPassword')
      )
    );
  }

  submitForm(registerForm: FormGroup) {
    delete registerForm.value.confirmPassword;
    this._auth.register(registerForm.value, '/auth/sing-up').subscribe(
      (res) => {
        open();
      },
      (err) => {
        this.error = err.error.message;
      }
    );
  }

  open() {
    this.modalService.open(this.content);
  }

  navigate() {
    this._router.navigate(['/login']);
  }
}

function matchValidator(control: any, controlTwo: any): ValidatorFn {
  return () => {
    if (control.value !== controlTwo.value && controlTwo.value != '')
      return { match_error: 'Value does not match' };
    return null;
  };
}
