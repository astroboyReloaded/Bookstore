import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const { books: bookList } = useSelector((state) => state.books);

  return (
    <>
      <header>
        <h1>Books</h1>
      </header>
      <main>
        <section>
          <ul>
            {bookList.map((book) => (
              <li key={book.title}>
                <Book category={book.category} title={book.title} author={book.author} />
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>ADD NEW BOOK</h2>
          <form>
            <input type="text" placeholder="Book title" />
            <input type="text" placeholder="autor" />
            <button type="submit">ADD BOOK</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Books;
