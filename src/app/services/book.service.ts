import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Book } from '../models/book.model';
import { BOOKS } from '../data/books.data';

@Injectable()
export class BookService {

  /**
   * Retrieve an array of books
   * @return Observable<Book[]>
   */
  loadBooks(): Observable<Book[]> {
    return new Observable((observer: Observer<Book[]>) => {
      const books = BOOKS;
      observer.next(books);
      observer.complete();
    });
  }

}
