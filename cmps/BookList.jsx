const { useState, useRef, useEffect } = React;
import { BookPreview } from "../cmps/BookPreview.jsx";
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookList({ books, onSelectedBookId, onRemoveBook }) {
  console.log(books);
  return (
    <section className="book-list">
      {books.map((book) => {
        // console.log("book ID:", book.id);
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
            <button 
            className="book-details">
              <Link to={`/books/edit/${book.id}`}>Edit Book</Link> </button>
            <button
              className="book-details"
              onClick={() => {
                onRemoveBook(book.id);
                console.log("removing book: ", book.id);
              }}
            >

              Remove Book
            </button>
          </div>
        );
      })}
    </section>
  );
}
