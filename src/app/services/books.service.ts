import { Book} from '../models/book.model';
import { Subject} from 'rxjs';
import {User} from '../../../../mon-projet-angular/src/app/models/User.model';

export class BooksService {

  private books: Book[] =  [
    new Book ('Pride & Prejudice', 'Jane Austeen')
  ];

  bookSubject = new Subject <Book[]>();

  emitBookSubject() {
    this.bookSubject.next(this.books.slice());
  }

  addBook(book: Book) {
    this.books.push(book);
    this.emitBookSubject();
  }
}
