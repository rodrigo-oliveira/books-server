const { getAllBooks, getBookById, insertBook, modifyBook, deleteBookById } = require('../services/book');
const { isValidId } = require('../utils/utils');

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

        if (checkId(id)) {
            const book = getBookById(id);
            res.send(book);
        } else {
            res.status(422);
            res.send('Invalid id')
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
 
function postBook(req, res) {
    const id = req.params.id;

    try {
        if (isValidId(id)) {
            const insertedBook = insertBook(req.body);
            res.status(201);
            res.send(insertedBook);
        } else {
            res.status(422);
            res.send('Invalid id')
        }
    } catch (error) {
        res.status(500);
        res.send({error});
    }
}

function patchBook(req, res) {
    const id = req.params.id;

    try {
        if (isValidId(id)) {
            const books = modifyBook(id, req.body);
            res.send(books);
        } else {
            res.status(422);
            res.send('Invalid id')
        }
    } catch (error) {
        res.status(500);
        res.send({error});
    }
}

function deleteBook(req, res) {
    const id = req.params.id;

    try {

        if (isValidId(id)) {   
            const id = deleteBookById(id);
            res.send({id});
        } else {
            res.status(422);
            res.send('Invalid id')
        }
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