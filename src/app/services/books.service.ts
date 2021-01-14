import { Book} from '../models/book.model';
import { Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class BooksService {

  private books: Book[] = [];
  bookSubject = new Subject<Book[]>();

  constructor() {
    this.getBooks();
  }

  emitBookSubject() {
    this.bookSubject.next(this.books.slice());
  }


  saveBooksToServer() {
    firebase.database().ref('/books').set(this.books);
  }

  getBooks() {
    firebase.database().ref('/books')
      .on('value', (data: DataSnapshot) => {
          this.books = data.val() ? data.val() : [];
        this.emitBookSubject();
        }
      );
  }

  getSingleBook(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewBook(newBook: Book) {
    this.books.push(newBook);
    this.saveBooksToServer();
    this.emitBookSubject();
  }

  removeBook(book: Book) {
    const bookIndexToRemove = this.books.findIndex(
      (bookEl) => {
        if(bookEl === book) {
          return true;
        }
      }
    );
    this.books.splice(bookIndexToRemove, 1);
    this.saveBooksToServer();
    this.emitBookSubject();
  }
}
