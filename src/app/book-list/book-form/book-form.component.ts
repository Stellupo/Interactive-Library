import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {BooksService} from '../../services/books.service';
import {Router} from '@angular/router';
import {Book} from '../../models/book.model';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private bookService: BooksService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: '',
    });
  }

  onSubmit() {
    const formValue = this.bookForm.value;
    const newBook = new Book(
      formValue.title,
      formValue.author,
    );
    newBook.synopsis = formValue.synopsis;
    //todo picture  formValue.picture ?
    this.bookService.createNewBook(newBook)
    this.router.navigate(['/books']);  // navigate to the page listing all the books after adding the new book
  }

}
