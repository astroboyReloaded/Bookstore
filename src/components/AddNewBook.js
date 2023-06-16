import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import addNewBook from '../style/addNewBook.module.css';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const title = useRef();
  const author = useRef();

  const handleAddBook = () => {
    dispatch(addBook({
      item_id: Date.now().toString(),
      title: title.current.value,
      author: author.current.value,
      category: 'any',
    }));
    title.current.value = '';
    author.current.value = '';
    title.current.focus();
  };

  return (
    <section>
      <h2 className={addNewBook.sectionTitle}>ADD NEW BOOK</h2>
      <form className={addNewBook.form}>
        <input ref={title} type="text" className={`${addNewBook.input} ${addNewBook.title}`} placeholder="Book title" />
        <input ref={author} type="text" className={`${addNewBook.input} ${addNewBook.author}`} placeholder="Autor" />
        <button onClick={handleAddBook} className={addNewBook.addBtn} type="button">ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddNewBook;
