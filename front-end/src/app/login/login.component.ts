import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

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
    this._auth.login(loginForm.value, '/auth/login').subscribe(
      (res) => {
        localStorage.setItem('userTaken', res.Token);
        this._auth.saveCurrentUser();
        this._router.navigate(['/profile']);
      },
      (err) => {
        console.log(err);
        this.error = err.error.message;
      }
    );
  }
}
