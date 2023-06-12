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
              <li key={book.title}>
                <Book category={book.category} title={book.title} author={book.author} />
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
