import { useState } from "react";
import defaultBooks from '../defaultBooks';

const Books = () => {
  const [bookList] = useState(JSON.parse(localStorage.getItem('books')) || defaultBooks);

  return (
    <>
      <header>
        <h1>Books</h1>
      </header>
      <main>
        <ul>
          {bookList.map((book) => (
            <li key={book.title}>
              <article>
                <span>{book.category}</span>
                <h1>{book.title}</h1>
                <data>{book.author}</data>
                
              </article>
            </li>  
          ))}
        </ul>
      </main>
    </>
  )
};

export default Books;
