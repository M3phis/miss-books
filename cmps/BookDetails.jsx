import { bookService } from "../services/books.service.js";

const { useState, useEffect } = React;

export function BookDetails({ onSelectedBookId, selectedBookId }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    console.log("lets load a book");
    loadBook();
  }, []);

  function loadBook() {
    bookService.getBook(selectedBookId).then((book) => setBook(book));
  }

  if (!book) return "Loading...";
  return (
    <section className="book-details">
      <h1>Book title: {book.title}</h1>
      <h1>Book Price: ${book.listPrice.amount}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quae
        fuga eveniet, quisquam ducimus modi optio in alias accusantium corrupti
        veritatis commodi tenetur voluptate deserunt nihil quibusdam. Expedita,
        architecto omnis?
      </p>
      <button onClick={() => onSelectedBookId(null)}>Back</button>
    </section>
  );
}
