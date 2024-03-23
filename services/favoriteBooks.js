const fs = require('fs');
const booksFile = './data/books.json';
const favoriteBooksFile = './data/favoriteBooks.json';

function getAllFavoriteBooks() {
    return JSON.parse(fs.readFileSync(favoriteBooksFile));
}

function insertFavoriteBook(id) {
    const books = JSON.parse(fs.readFileSync(booksFile));
    const favoriteBooks = getAllFavoriteBooks();
    const newBook = books.find(book => book.id === id);
    const newFavoriteBooks = [...favoriteBooks, newBook];

    fs.writeFileSync(favoriteBooksFile, JSON.stringify(newFavoriteBooks));
}

function deleteFavoriteBookById(id) {
    const favoriteBooks = getAllFavoriteBooks();
    const filteredBooks = favoriteBooks.filter(book => book.id !== id);

    fs.writeFileSync(favoriteBooksFile, JSON.stringify(filteredBooks));
}

module.exports = {
    getAllFavoriteBooks,
    insertFavoriteBook,
    deleteFavoriteBookById
};