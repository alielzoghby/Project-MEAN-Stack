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

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  @ViewChild('content') content!: HTMLElement;

  error: any = '';
  registerForm!: FormGroup;
  lodaing = false;

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
        Validators.pattern('[A-Za-z1-9*&%$#@!^_.=+]+'),
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
      photo: new FormControl(null),
    });

    this.registerForm.addValidators(
      matchValidator(
        this.registerForm.get('password'),
        this.registerForm.get('confirmPassword')
      )
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.registerForm.get('photo')?.setValue(file);
  }

  onFileSelectedFormUpdate(event: any) {
    const file = event.target.files[0];
    this.registerForm.value.photo = file;
  }

  submitForm(registerForm: FormGroup) {
    console.log(registerForm.value);
    delete registerForm.value.confirmPassword;
    this.lodaing = true;
    this._auth.register(registerForm.value, '/auth/sing-up').subscribe(
      (res) => {
        this.lodaing = false;
        this.open();
      },
      (err) => {
        console.log(err);

        this.lodaing = false;
        this.error = err.error.message;
      }
    );
    setTimeout(() => {
      this.error = false;
    }, 3000);
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
    if (controlTwo.value != ('' || null || undefined || ' ')) {
      if (control.value !== controlTwo.value)
        return { match_error: 'Value does not match' };
    }
    return null;
  };
}
