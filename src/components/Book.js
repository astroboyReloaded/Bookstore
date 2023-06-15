import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';
import book from '../style/book.module.css';

const Book = ({
  title,
  author,
  id,
}) => {
  const dispatch = useDispatch();

  return (
    <article className={book.container}>
      <h1>{title}</h1>
      <data>{author}</data>
      <Button onClick={() => dispatch(removeBook(id))} label="Remove" />
    </article>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
