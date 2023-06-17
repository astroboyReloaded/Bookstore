import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeBook } from '../redux/books/booksSlice';
import book from '../style/book.module.css';
import Progress from './book/Progress';
import Chapter from './book/Chapter';
import Loading from './Loading';

const Book = ({
  category,
  title,
  author,
  id,
  percent,
  current,
}) => {
  const dispatch = useDispatch();

  const [removing, setRemoving] = useState(false);

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
    setRemoving(true);
  };

  if (removing) {
    return <Loading unmount />;
  }

  return (
    <article className={book.container}>
      <section className={book.Section}>
        <data className={book.category}>{category}</data>
        <h1 className={book.title}>{title}</h1>
        <data className={book.author}>{author}</data>
        <div className={book.actionsContainer}>
          <button className={book.actionBtn} type="button">Coments</button>
          <button onClick={handleRemoveBook} className={book.actionBtn} type="button">Remove</button>
          <button className={book.actionBtn} type="button">Edit</button>
        </div>
      </section>
      <Progress percent={percent} />
      <Chapter current={current} />
    </article>
  );
};

export default Book;

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  current: PropTypes.string.isRequired,
};
