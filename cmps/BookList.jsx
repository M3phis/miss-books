const { useState, useRef, useEffect } = React;
import { BookPreview } from "../cmps/BookPreview.jsx";

export function BookList({ books }) {
  console.log(books);
  return (
    <section className="user-preview">
      {books.map((book) => {
        return (
          <div key={book.id}>
            <BookPreview book={book} key={book.id}></BookPreview>
            <button className="book-details">Book Details</button>
          </div>
        );
      })}
    </section>
  );
}
