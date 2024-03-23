const fs = require('fs');
const booksFile = './data/books.json';

function getAllBooks() {
    return JSON.parse(fs.readFileSync(booksFile));
}

function getBookById(id) {
    const books = getAllBooks();
    const filteredBook = books.filter(livro => livro.id === id)[0];

    return filteredBook;
}

function insertBook(newBook) {
    const allBooks = getAllBooks();
    const books = [ ...allBooks, newBook ];

    fs.writeFileSync(booksFile, JSON.stringify(books));
}

function modifyBook(id, body) {
    const allBooks = getAllBooks();
    const modifiedIndex = allBooks.findIndex(book => book.id === id);
    const contentChanged = { ...allBooks[modifiedIndex], ...body };

    allBooks[modifiedIndex] = contentChanged;
    fs.writeFileSync(booksFile, JSON.stringify(allBooks));
}

function deleteBookById(id) {
    const allBooks = getAllBooks();
    const filteredBooks = allBooks.filter(book => book.id !== id);

    fs.writeFileSync(booksFile, JSON.stringify(filteredBooks));
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    modifyBook,
    deleteBookById
};
