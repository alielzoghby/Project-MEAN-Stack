import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css'],
})
export class AdminSigninComponent {
  error: any;

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private _router: Router, private _auth: AuthService) {}

  submitForm(loginForm: FormGroup) {
    this._auth.login(loginForm.value, '/backoffice/auth/login').subscribe(
      (res) => {
        localStorage.setItem('userTaken', res.Token);
        this._auth.saveCurrentUser();
        this._router.navigate(['/admin']);
      },
      (err) => {
        console.log(err);
        this.error = err.error.message;
      }
    );
  }
}
