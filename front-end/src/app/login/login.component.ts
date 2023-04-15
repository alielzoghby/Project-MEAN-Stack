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
  error: any = '';
  loginForm!: FormGroup;
  lodaing = false;

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
    this.lodaing = true;

    this._auth.login(loginForm.value, '/auth/login').subscribe(
      (res) => {
        this.lodaing = false;
        localStorage.setItem('userTaken', res.Token);
        this._auth.saveCurrentUser();
        this._router.navigate(['/profile']);
      },
      (err) => {
        this.lodaing = false;
        this.error = err.error.message;
      }
    );
    setTimeout(() => {
      this.error = false;
    }, 3000);
  }
}
