import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import AddNewBook from './AddNewBook';
import books from '../style/books.module.css';
import defaultBooks from '../defaultBooks';

const BookList = () => {
  const dispatch = useDispatch();
  const { booksCollection, status } = useSelector((store) => store.books);

  useEffect(() => {
    if (status !== 'idle') return;
    dispatch(fetchBooks());
  }, [booksCollection, status, dispatch]);

  return (
    <>
      <section>
        <ul className={books.list}>
          {Object.keys(booksCollection).sort((a, b) => a - b).map((key, i) => (
            <li key={key} className={books.listItem}>
              <Book
                category={defaultBooks[i].category || 'any'}
                title={booksCollection[key][0].title}
                author={booksCollection[key][0].author}
                id={key}
                percent={defaultBooks[i].precentage || 0}
                current={defaultBooks[i].chapter || 'Introduction'}
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
