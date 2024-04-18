import { FC } from 'react';
import { Book } from './../../interfaces/Book.interface';
import './BookItem.css'

type Props = {
  deleteBook: (book: Book) => void;
  book: Book;
}

const BookItem: FC<Props> = ({ book, deleteBook }) => {
  return (<li className='book-item'>{book.title} by {book.author}, ${book.price}<button onClick={() => deleteBook(book)} className='add-book-form-button'>Delete</button></li>);
};

export default BookItem;