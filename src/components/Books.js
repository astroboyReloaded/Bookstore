import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import AddNewBook from './AddNewBook';
import { fetchBooks } from '../redux/books/booksSlice';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, books]);

  return (
    <>
      <section>
        <h1>Books</h1>
        <ul>
          books
          {Object.keys(books).map((key) => (
            <li key={key}>
              <Book
                title={books[key][0].title}
                author={books[key][0].author}
                id={key}
              />
            </li>
          ))}
        </ul>
      </section>
      <AddNewBook />
    </>
  );
};

export default Books;
