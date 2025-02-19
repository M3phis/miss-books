import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { BookIdx } from "./pages/BookIdx.jsx";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { BookEdit } from "./pages/BookEdit.jsx";
const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM




const { useState, useRef, useEffect } = React;

export function App() {
  const [page, setPage] = useState("home");

  return (

       <Router>
            <section className="app">
                <AppHeader />

                <main className="main-layout">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/books" element={<BookIdx />} />
                        <Route path="/books/edit/" element={<BookEdit />} />
                        <Route path="/books/edit/:bookId" element={<BookEdit />} />
                    </Routes>
                </main>
            </section>
        </Router>

    // <section className="app">
    //   <header className="app-header main-layout">
    //     <h1>My App</h1>
    //     <button
    //       onClick={() => {
    //         setPage("home");
    //       }}
    //     >
    //       Home
    //     </button>
    //     <button
    //       onClick={() => {
    //         setPage("about");
    //       }}
    //     >
    //       About
    //     </button>
    //     <button
    //       onClick={() => {
    //         setPage("bookIdx");
    //       }}
    //     >
    //       Books
    //     </button>
    //   </header>
    //   <main className="main-layout">
    //     {page === "home" && <Home />}
    //     {page === "about" && <About />}
    //     {page === "bookIdx" && <BookIdx />}
    //   </main>
    // </section>
  );
}
