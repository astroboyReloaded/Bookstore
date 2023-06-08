import { useState } from "react";
import defaultBooks from '../defaultBooks';

const Books = () => {
  const [bookList] = useState(JSON.parse(localStorage.getItem('books')) || defaultBooks);

  return (
    <header className="App-header">
      <h1>Books</h1>
    </header>
  )
};

export default Books;
