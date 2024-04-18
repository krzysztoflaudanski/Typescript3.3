import { FC } from 'react';
import { Book } from './../../interfaces/Book.interface';
import './BookItem.css'

type Props = {
  removeBook: (book: string) => void;
  book: Book;
}

const BookItem: FC<Props> = ({ book, removeBook }) => {
  return (<li className='book-item'>{book.title} by {book.author}, ${book.price}<button onClick={() => removeBook(book.id)} className='add-book-form-button'>Delete</button></li>);
};

export default BookItem;