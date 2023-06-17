import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import AddNewBook from './AddNewBook';
import books from '../style/books.module.css';
import defaultBooks from '../defaultBooks';
import Loading from './Loading';

const BookList = () => {
  const dispatch = useDispatch();
  const { booksCollection, status, isLoading } = useSelector((store) => store.books);

  useEffect(() => {
    if (status !== 'idle') return;
    dispatch(fetchBooks());
  }, [booksCollection, status, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <ul className={books.list}>
          {Object.keys(booksCollection).sort((a, b) => a - b).map((key, i) => (
            <li key={key} className={books.listItem}>
              <Book
                category={defaultBooks[i]?.category || 'Any'}
                title={booksCollection[key][0].title}
                author={booksCollection[key][0].author}
                id={key}
                percent={defaultBooks[i]?.precentage || 0}
                current={defaultBooks[i]?.chapter || 'Introduction'}
              />
            </li>
          ))}
        </ul>
      </section>
      <hr className={books.sectionSplit} />
      <AddNewBook />
    </>
  );
};
export default BookList;
