const { useState, useRef, useEffect } = React;
import { BookPreview } from "../cmps/BookPreview.jsx";
export function BookList({ books, onSelectedBookId }) {
  console.log(books);
  return (
    <section className="book-list">
      {books.map((book) => {
        console.log("book ID:", book.id);
        return (
          <div className="book-card" key={book.id}>
            <BookPreview book={book}></BookPreview>
            <button
              className="book-details"
              onClick={() => {
                onSelectedBookId(book.id);
                console.log("book details: ", book.id);
              }}
            >
              Book Details
            </button>
          </div>
        );
      })}
    </section>
  );
}
