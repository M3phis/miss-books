import { bookService } from "../services/books.service.js";
const { useState, useEffect } = React;

export function BookDetails({ onSelectedBookId, selectedBookId }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    loadBook();
  }, []);

  function loadBook() {
    bookService.getBook(selectedBookId).then((book) => setBook(book));
  }

  if (!book) return <p className="loading">Loading...</p>;

  return (
    <section className="book-details">
      <button className="back-btn" onClick={() => onSelectedBookId(null)}>
        ← Back
      </button>
      <div className="book-header">
        <img className="book-thumbnail" src={book.thumbnail} alt={book.title} />
        <div className="book-info">
          <h1>{book.title}</h1>
          <h2>{book.subtitle}</h2>
          <p className="book-authors">By {book.authors.join(", ")}</p>
          <p className="book-category">
            Category: {book.categories.join(", ")}
          </p>
          <p className="book-year">Published: {book.publishedDate}</p>
        </div>
      </div>
      <p className="book-description">{book.description}</p>
      <p className="book-pagecount">📖 {book.pageCount} pages</p>
      <p className="book-language">
        🌎 Language: {book.language.toUpperCase()}
      </p>
      <p className="book-price">
        💰 Price: {book.listPrice.amount} {book.listPrice.currencyCode}{" "}
        {book.listPrice.isOnSale && (
          <span className="on-sale">🔥 On Sale!</span>
        )}
      </p>
    </section>
  );
}
