import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { BookIdx } from "./pages/BookIdx.jsx";

const { useState, useRef, useEffect } = React;

export function App() {
  const [page, setPage] = useState("home");

  return (
    <section className="app">
      <header className="app-header main-layout">
        <h1>My App</h1>
        <button
          onClick={() => {
            setPage("home");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            setPage("about");
          }}
        >
          About
        </button>
        <button
          onClick={() => {
            setPage("bookIdx");
          }}
        >
          Books
        </button>
      </header>
      <main className="main-layout">
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "bookIdx" && <BookIdx />}
      </main>
    </section>
  );
}
