import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import AddNewBook from './AddNewBook';
import books from '../style/Books.module.css';

const BookList = () => {
  const dispatch = useDispatch();
  const { booksCollection, status } = useSelector((store) => store.books);

  useEffect(() => {
    if (status !== 'idle') return;
    dispatch(fetchBooks());
  }, [booksCollection, status, dispatch]);

  return (
    <>
      <section className={books.sectionContainer}>
        <ul>
          {Object.keys(booksCollection).map((key) => (
            <li key={key}>
              <Book
                title={booksCollection[key][0].title}
                author={booksCollection[key][0].author}
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
export default BookList;
