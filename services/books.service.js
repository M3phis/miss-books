"use strict";
import { asyncStorageService } from "./async-storage.service.js";
import { storageService } from "./storage.service.js";

export const bookService = {
  getBooks,
  query,
  getBook,
  addBook,
  updateBook,
  removeBook,
  getDefaultFilter,
};

///book model for refrence:
/*

{ "id": "OXeMG8wNskc", 
 "title": "metus hendrerit",
  "description": "placerat nisi sodales suscipit tellus",
   "thumbnail": "http://ca.org/books-photos/20.jpg",
   //  "listPrice": { "amount": 109, "currencyCode": "EUR",
   //  "isOnSale": false } }

*/

export function getBooks() {
  return asyncStorageService
    .query("books")
    .then((books) => {
      if (!books[0]) {
        console.log("no books, adding fake books");
        _createBooks();
      } else {
        console.log(books);
        return Promise.resolve(books);
      }
    })
    .catch((err) => console.log(err));
}

function query(filterBy = {}) {
  return asyncStorageService.query("books").then((books) => {
    if (filterBy.title) {
      const regExp = new RegExp(filterBy.title, "i");
      console.log("books before filter:", books);
      books = books.filter((book) => regExp.test(book.title));
      console.log("books after filter:", books);
    }
    if (filterBy.listPrice) {
      books = books.filter((book) => book.listPrice >= filterBy.listPrice);
    }
    return Promise.resolve(books);
  });
}

function addBook() {}

function getBook() {}

function updateBook() {}

function removeBook() {}

function _createBooks() {
  const books = [];
  books.push(_createBook("OXeMG8wNskc", "book1", 4));
  books.push(_createBook("OXeMaweqweskc", "book2", 6));
  books.push(_createBook("qegeqgq231", "book3", 5));

  storageService.saveToStorage("books", books);
}

function _createBook(id, title, listPrice) {
  const book = { id, title, listPrice };

  return book;
}

function getDefaultFilter() {
  return { title: "", listPrice: "" };
}
