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
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGardGuard } from './auth-gard.guard';
import { AdminGuard } from './admin.guard';
import { AdminLoginGuard } from './admin-login.guard';
import { UserLogedGuard } from './user-loged.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },

  { path: 'categories', component: CategoriesComponent },
  { path: 'bookpage/:id', component: BookpageComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'author/:id', component: AuthorPageComponent },

  {
    path: 'profile',
    component: UserpageComponent,
    canActivate: [AuthGardGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UserLogedGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [UserLogedGuard],
  },
  {
    path: 'adminlogin',
    component: AdminSigninComponent,
    canActivate: [AdminLoginGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },

  // path for 404 route not found please keap it in last
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
