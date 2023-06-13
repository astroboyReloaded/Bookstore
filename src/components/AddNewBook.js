import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import Button from './Button';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const title = useRef();
  const author = useRef();

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: Date.now().toString(),
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
      <form>
        <input ref={title} type="text" placeholder="Book title" />
        <input ref={author} type="text" placeholder="autor" />
        <Button onClick={handleAddBook} label="ADD BOOK" />
      </form>
    </section>
  );
};

export default AddNewBook;
