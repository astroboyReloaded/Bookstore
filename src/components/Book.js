import PropTypes from 'prop-types';

const Book = ({ category, title, author }) => (
  <article>
    <span>{category}</span>
    <h1>{title}</h1>
    <data>{author}</data>
    <button type="button">Remove</button>
  </article>
);

export default Book;

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
