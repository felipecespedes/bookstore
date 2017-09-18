import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books: Book[] = [];
  public selectedBooks = 0;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.loadBooks().subscribe(books => {
      this.books = books;
    });
  }

  /**
   * Update the current selected books number
   * @param isSelected
   */
  updateSelectedBooks(isSelected: boolean): void {
    this.selectedBooks += isSelected ? 1 : -1;
  }

}
