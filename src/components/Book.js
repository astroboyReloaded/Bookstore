import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

const Book = ({
  title,
  author,
  id,
}) => {
  const dispatch = useDispatch();

  return (
    <article>
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
