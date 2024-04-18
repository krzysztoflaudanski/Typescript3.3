import { FC, useState, FormEvent } from 'react';
import { Book } from '../../interfaces/Book.interface';
import { randomID } from '../../utils/randomID';
import './AddBookForm.css'

type Props = {
    addBook: (book: Book) => void
}

const AddBookForm: FC<Props> = ({ addBook }) => {

    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [price, setPrice] = useState<number>(0);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const book = {
            id: randomID(10),
            title: title,
            author: author,
            price: price
        }
        addBook(book);
    }

    return (

        <form className="add-book-form" onSubmit={handleSubmit}>
            Title: <input value={title} onChange={e => setTitle(e.target.value)} type="text" />
            Author: <input value={author} onChange={e => setAuthor(e.target.value)} type="text" />
            Price: <input value={price} onChange={e => setPrice(parseInt(e.target.value))} type="number" />
            <button>Add book</button>
        </form>
    );
}
export default AddBookForm;