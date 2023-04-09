import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserpageComponent } from './userpage/userpage.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './register/signup.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthGardGuard } from './auth-gard.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'profile',
    component: UserpageComponent,
    // canActivate: [AuthGardGuard],
  },
  { path: 'categories', component: CategoriesComponent },
  {
    path: 'author',
    component: AuthorPageComponent, // canActivate: [AuthGardGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'bookpage/:id', component: BookpageComponent },
  { path: 'authors', component: AuthorsComponent },

  {
    path: 'bookpage',
    component: BookpageComponent, // canActivate: [AuthGardGuard],
  },
  // path for 404 route not found please keap it in last
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
