import { bookService } from "../services/books.service.js";
import { BookList } from "../cmps/BookList.jsx";
import { BookFilter } from "../cmps/BookFilter.jsx";
import { BookDetails } from "../cmps/BookDetails.jsx";
const { useState, useRef, useEffect } = React;

export function BookIdx() {
  const [books, setBooks] = useState(null);

  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter());

  const [selectedBookId, setSelectedBookId] = useState(null);
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

  function onSetSelectedBookId(bookId) {
    console.log("about to set selected ID");
    setSelectedBookId(bookId);
    console.log();
  }

  if (!books) return "I AM LOADING";
  return (
    <section className="book-index">
      {selectedBookId ? (
        <BookDetails
          onSelectedBookId={onSetSelectedBookId}
          selectedBookId={selectedBookId}
        ></BookDetails>
      ) : (
        <React.Fragment>
          <BookFilter
            filterBy={filterBy}
            onSetFilterBy={onSetFilterBy}
          ></BookFilter>
          <BookList
            onSelectedBookId={onSetSelectedBookId}
            books={books}
          ></BookList>
        </React.Fragment>
      )}
    </section>
  );
}
