import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  error: string = '';
  loginForm!: FormGroup;

  constructor(
    private _router: Router,
    private _auth: AuthService,
    private _http: HttpClient
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  submitForm(loginForm: FormGroup) {
    // this._auth.login(loginForm.value).subscribe((res) => {
    //   if (res.message == 'success') {
    //     // done
    //     // get taken from header or cookies
    //     //save in localstorige or cookies
    //     this._auth.saveCurrentUser();
    //     this._router.navigate(['/profile']);
    //   } else {
    //     this.error = res.errors.email.message;
    //   }
    // });
  }
}
