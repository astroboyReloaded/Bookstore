import { useState } from 'react';
import defaultBooks from '../defaultBooks';

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
                <article>
                  <span>{book.category}</span>
                  <h1>{book.title}</h1>
                  <data>{book.author}</data>
                  <button type="button">Remove</button>
                </article>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>ADD NEW BOOK</h2>
          <form>
            <input type="text" placeholder="Book title" />
            <input type="text" placeholder="autor" />
            <button type="button">ADD BOOK</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Books;
