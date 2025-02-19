const { useState, useEffect } = React;

export function BookFilter({ filterBy, onSetFilterBy }) {
  const [filterByToEdit, setfilterByToEdit] = useState({ ...filterBy });
  // console.log('filterByToEdit:', filterByToEdit)

  useEffect(() => {
    onSetFilterBy(filterByToEdit);
  }, [filterByToEdit]);

  function onHandleChange(ev) {
    let { value, type, name: field } = ev.target;
    console.log("field:", field);
    console.log(ev);
    if (type === "number") value = +value;
    setfilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, [field]: value }));
  }

  function onSubmitForm(ev) {
    ev.preventDefault();

    onSetFilterBy(filterByToEdit);
  }

  return (
    <section className="book-filter">
      <h2>Filter Our Books</h2>

      <form onSubmit={onSubmitForm}>
        <label htmlFor="txt">title</label>
        <input
          name="title"
          value={filterByToEdit.title}
          onChange={onHandleChange}
          type="text"
          id="txt"
        />

        <label htmlFor="listPrice"> Price</label>
        <input
          name="listPrice"
          value={filterByToEdit.listPrice || ""}
          onChange={onHandleChange}
          type="number"
          id="listPrice"
        />

        <button>Submit</button>
      </form>
    </section>
  );
}
