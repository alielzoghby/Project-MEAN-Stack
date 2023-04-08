import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  registerForm!: FormGroup;
  constructor(private _router: Router, private modalService: NgbModal) {
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
    console.log(registerForm.value);
  }

  open(content: any) {
    this.modalService.open(content);
  }

  navigate() {
    this._router.navigate(['login']);
  }
}

function matchValidator(control: any, controlTwo: any): ValidatorFn {
  return () => {
    if (control.value !== controlTwo.value && controlTwo.value != '')
      return { match_error: 'Value does not match' };
    return null;
  };
}
