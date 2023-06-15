import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import book from '../style/book.module.css';
import Progress from './book/Progress';

const Book = ({
  title,
  author,
  id,
}) => {
  const dispatch = useDispatch();

  return (
    <article className={book.container}>
      <section className={book.nameSection}>
        <h1 className={book.title}>{title}</h1>
        <data className={book.author}>{author}</data>
        <div className={book.actionsContainer}>
          <button className={book.actionBtn} type="button">Coments</button>
          <button onClick={() => dispatch(removeBook(id))} className={book.actionBtn} type="button">Remove</button>
          <button className={book.actionBtn} type="button">Edit</button>
        </div>
      </section>
      <Progress percent={64} />
    </article>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
