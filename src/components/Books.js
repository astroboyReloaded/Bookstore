import { useSelector } from 'react-redux';
import Book from './Book';
import AddNewBook from './AddNewBook';

const Books = () => {
  const { books } = useSelector((state) => state.books);

  return (
    <>
      <header>
        <h1>Books</h1>
      </header>
      <main>
        <section>
          <ul>
            {books?.map((book) => (
              <li key={book.item_id}>
                <Book
                  title={book.title}
                  author={book.author}
                  id={book.item_id}
                />
              </li>
            ))}
          </ul>
        </section>
        <AddNewBook />
      </main>
    </>
  );
};

export default Books;
