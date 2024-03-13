const { getAllBooks, getBookById, insertBook, modifyBook, deleteBookById } = require('../services/book');

function getBooks(req, res) {
    try {
        const books = getAllBooks();
        res.send(books);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id;
        const book = getBookById(id);
        res.send(book);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
 
function postBook(req, res) {
    try {
        const insertedBook = insertBook(req.body);
        res.status(201);
        res.send(insertedBook);
    } catch (error) {
        res.status(500);
        res.send({error});
    }
}

function patchBook(req, res) {
    try {
        const books = modifyBook(req.params.id, req.body);
        res.send(books);
    } catch (error) {
        res.status(500);
        res.send({error});
    }
}

function deleteBook(req, res) {
    try {
        const id = deleteBookById(req.params.id);
        res.send({id});
    } catch (error) {
        res.status(500);
        res.send({error});
    }
 }

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
};