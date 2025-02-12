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
        console.log('field', field)
        console.log('value', value)
        console.log('target', target.type)
        // value += ','
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break
            case 'text':
                value = target.value
                break
        }

        setBookToEdit(prevBookToEdit => {
            if (field === 'listPrice') {    
                return {
                    ...prevBookToEdit,listPrice: {...prevBookToEdit.listPrice,amount: value}
                }
            }
            return {
                ...prevBookToEdit, [field]: value
            }
        })
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



            <h1>{bookId ? 'Edit Book' : 'Add Book'}</h1>


            <form onSubmit={onSaveBook}>

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={handleChange} name="title" />


                <label htmlFor="listPrice">Listed Price:</label>
                <input type="number" id="listPrice" value={listPrice.amount || ''} onChange={handleChange} name="listPrice" />
        


                <button onClick={onSaveBook}>{bookId ? 'Save' : 'Add'}</button>
                <button onClick={() => navigate('/books')}>Cancel</button>
            </form>
        </section>

    )
}