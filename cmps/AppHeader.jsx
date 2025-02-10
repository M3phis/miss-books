const { Link, NavLink } = ReactRouterDOM;

export function AppHeader() {
  return (
    <header>
        <section>
            <h1>MissBooks</h1>
        </section>
        <nav className="app-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/books">Books</Link>
        </nav>



    </header>   
  )
}
