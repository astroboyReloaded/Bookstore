import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const title = useRef();
  const author = useRef();

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: Date.now(),
      title: title.current.value,
      author: author.current.value,
    }));
    title.current.value = '';
    author.current.value = '';
    title.current.focus();
  };

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleAddBook}>
        <input ref={title} type="text" placeholder="Book title" />
        <input ref={author} type="text" placeholder="autor" />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddNewBook;
