import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent } from "./home-page/home-page.component"
import { NavbarComponent } from './navbar/navbar.component';
import { UserpageComponent } from './userpage/userpage.component';
import { CategoriesComponent } from './categories/categories.component';
const routes: Routes = [  
  {path:"",component:HomePageComponent},
 {path:"userpage",component:UserpageComponent},
  {path:"nav",component:NavbarComponent},
  {path:"categories/:type",component:CategoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
