import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup} from '@angular/forms';
import {BooksService} from '../../services/books.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  constructor(private bookService: BooksService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value.title;
    const author = form.value.author;
    //todo const picture = form.value.picture;
    this.bookService.addBook(title, author);
    this.router.navigate(['/books']);  // navigate to the page listing all the books after adding the new book
  }

}
