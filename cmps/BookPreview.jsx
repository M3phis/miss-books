export function BookPreview({ book }) {
  return (
    <div key={book.id}>
      <div className="book-title">{book.title}</div>
      <div className="book-id">{book.id}</div>
      <div className="book-price">{book.listPrice}</div>
    </div>
  );
}
