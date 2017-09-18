import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input()
  public book: Book;

  @Output()
  public selectionChanged: EventEmitter<boolean>;

  constructor() {
    this.selectionChanged = new EventEmitter();
  }

  /**
   * Run selection actions when clicking in the selection button
   */
  onSelect(): void {
    this.toggleSelection();
    this.notifySelectionHasChanged();
  }

  /**
   * Toggle the current selection state of the book
   */
  private toggleSelection(): void {
    this.book.isSelected = ! this.book.isSelected;
  }

  /**
   * Emit the current selection state of the book
   */
  private notifySelectionHasChanged(): void {
    this.selectionChanged.emit(this.book.isSelected);
  }

}
