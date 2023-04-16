import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css'],
})
export class AdminSigninComponent {
  error: any;
  lodaing = false;

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private _router: Router, private _auth: AuthService) {}

  submitForm(loginForm: FormGroup) {
    this.lodaing = true;
    this._auth.login(loginForm.value, '/backoffice/auth/login').subscribe(
      (res) => {
        this.lodaing = false;
        localStorage.setItem('adminTaken', res.Token);
        this._auth.saveloggedAdmin();
        this._router.navigate(['/admin']);
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
