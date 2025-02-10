import { bookService } from "../services/books.service.js";
const { useParams, useNavigate, Link } = ReactRouterDOM
const {useEffect, useState} = React



export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())

    const {bookId} = useParams()
    console.log('bookId', bookId)
    
useEffect(() => {
    if (bookId) {
       loadBook()
    }
}, [bookId])


function loadBook() {
    bookService.getBook(bookId).then(setBookToEdit).catch(err => {
        console.log('err', err)
    })
}

const navigate = useNavigate()


    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        // value += ','
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break
        }

        // setBookToEdit(prevBookToEdit => ({ ...prevBookToEdit, [field]: value }))
    }


    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.updateBook(bookToEdit).then((book)=>{
            console.log('book saved:', book)
        }).catch(err => {
            console.log('err', err)
        })
    }


    const { title, listPrice } = bookToEdit
    console.log('bookToEdit', bookToEdit)

    return (
        <section className="book-edit">



            <h1>{bookId ? 'Book Edit' : 'Book Add'}</h1>


            <form onSubmit={onSaveBook}>

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={handleChange} name="title" />


                <label htmlFor="listedPrice">Listed Price:</label>
                <input type="number" id="listedPrice" value={listPrice.amount || ''} onChange={handleChange} name="listedPrice" />
        


                <button>Save</button>
            </form>
        </section>

    )
}