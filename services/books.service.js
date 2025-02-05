"use strict";
import { asyncStorageService } from "./async-storage.service.js";
import { storageService } from "./storage.service.js";
import { utilService } from "./util.service.js";
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
    if (!books[0]) {
      _createBooks();
    }

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

function getBook(bookId) {
  return asyncStorageService.get("books", bookId);
}

function updateBook() {}

function removeBook() {}

function _createBooks2() {
  const books = [];
  books.push(_createBook("OXeMG8wNskc", "book1", 4));
  books.push(_createBook("hwrfq23", "book2", 6));
  books.push(_createBook("qegeqgq231", "book3", 5));

  storageService.saveToStorage("books", books);
}

function _createBooks() {
  const ctgs = ["Love", "Fiction", "Poetry", "Computers", "Religion"];
  const books = [];
  for (let i = 0; i < 20; i++) {
    const book = {
      id: utilService.makeId(),
      title: utilService.makeLorem(2),
      subtitle: utilService.makeLorem(4),
      authors: [utilService.makeLorem(1)],
      publishedDate: utilService.getRandomIntInclusive(1950, 2024),
      description: utilService.makeLorem(20),
      pageCount: utilService.getRandomIntInclusive(20, 600),
      categories: [ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)]],
      thumbnail: `http://coding-academy.org/books-photos/${i + 1}.jpg`,
      language: "en",
      listPrice: {
        amount: utilService.getRandomIntInclusive(80, 500),
        currencyCode: "EUR",
        isOnSale: Math.random() > 0.7,
      },
    };
    books.push(book);
  }
  console.log("books", books);
  storageService.saveToStorage("books", books);
}

function _createBook(id, title, listPrice) {
  const book = { id, title, listPrice };

  return book;
}

function getDefaultFilter() {
  return { title: "", listPrice: "" };
}
