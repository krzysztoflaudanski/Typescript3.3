import { FC, useState } from 'react';
import BooksList from './components/BooksList/BooksList';
import { Book } from './interfaces/Book.interface';
import AddBookForm from './components/AddBookForm/AddBookForm';


const booksData: Book[] = [
  {
    id: 'te1314derw',
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    price: 25
  },
  {
    id: 't32s14dzdw',
    title: 'East of Eden',
    author: 'John Steinbeck',
    price: 30
  }
];

const App: FC = () => {
  const [books, setBooks] = useState<Book[]>(booksData);

  const addBook = (book: Book) => {
    setBooks([...books, book])
  }

  const deleteBook = (book: Book) => {
    const updatedBooks = books.filter(b => b.id !== book.id);
    setBooks(updatedBooks);
  }

  return (
    <div className="container">
      <header>
        <h1>Books App</h1>
      </header>
      <BooksList books={books} deleteBook={deleteBook} />
      <AddBookForm addBook={addBook} />
    </div>
  );
}

export default App;
