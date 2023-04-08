import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserpageComponent } from './userpage/userpage.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { CarouselComponent } from './carousel/carousel.component';
import { FotterComponent } from './fotter/fotter.component';
import { LoginComponent } from './navbar/login/login.component';
import { SignupComponent } from './register/signup.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { AuthorsComponent } from './authors/authors.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookComponent } from './book/book.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PopularBookComponent } from './popular-book/popular-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    UserpageComponent,
    CategoriesComponent,
    AuthorPageComponent,
    CarouselComponent,
    FotterComponent,
    LoginComponent,
    SignupComponent,
    BookpageComponent,
    AuthorsComponent,
    NotfoundComponent,
    BookComponent,
    PopularBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
