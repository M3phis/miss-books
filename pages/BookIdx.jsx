import { bookService } from "../services/books.service.js";
import { BookList } from "../cmps/BookList.jsx";
import { BookFilter } from "../cmps/BookFilter.jsx";
const { useState, useRef, useEffect } = React;

export function BookIdx() {
  const [books, setBooks] = useState(null);

  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter());

  useEffect(() => {
    loadBooks();
    // bookService.query().then((books) => setBooks(books));
    // console.log(bookService.getBooks().then(() => console.log("got books")));
  }, [filterBy]);

  function loadBooks() {
    bookService.query(filterBy).then((books) => {
      setBooks(books);
    });
  }
  function onSetFilterBy(filterBy) {
    setFilterBy({ ...filterBy });
    console.log("new filter is ", filterBy);
  }

  if (!books) return "I AM LOADING";
  return (
    <section>
      <BookFilter
        filterBy={filterBy}
        onSetFilterBy={onSetFilterBy}
      ></BookFilter>
      <BookList books={books}></BookList>
    </section>
  );
}
