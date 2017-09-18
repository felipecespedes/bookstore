export class Book {
  isbn: string;
  title: string;
  description: string;
  author: string;
  publishedDate: Date;
  isSelected: boolean;

  constructor(
    isbn: string,
    title: string,
    description: string,
    author: string,
    publishedDate: Date,
    isSelected?: boolean
  ) {
    this.isbn = isbn;
    this.title = title;
    this.description = description;
    this.author = author;
    this.publishedDate = publishedDate;
    this.isSelected = isSelected != null ? isSelected : false;
  }

}
