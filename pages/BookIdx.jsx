import { bookService } from "../services/books.service.js";
import { BookList } from "../cmps/BookList.jsx";
const { useState, useRef, useEffect } = React;

export function BookIdx() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    bookService.getBooks().then((books) => setBooks(books));
    console.log(bookService.getBooks().then(() => console.log("got books")));
  }, []);
  if (!books) return "I AM LOADING";
  return (
    <section>
      <BookList books={books}></BookList>
    </section>
  );
}
