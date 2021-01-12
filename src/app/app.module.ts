import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import {BooksService} from './services/books.service';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../../mon-projet-angular/src/app/services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'books/edit', component: BookFormComponent},
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'books/view/:id', component: SingleBookComponent },
  { path: '', component: BookListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    RouterModule
  ],
  providers: [AuthService, BooksService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
