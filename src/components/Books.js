import { useState } from 'react';
import defaultBooks from '../defaultBooks';
import Book from './Book';

const Books = () => {
  const [bookList] = useState(JSON.parse(localStorage.getItem('books')) || defaultBooks);

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
