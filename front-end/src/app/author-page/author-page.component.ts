import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent {
constructor(private router:Router){
}
}
