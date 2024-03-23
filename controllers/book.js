const { getAllBooks, getBookById, insertBook, modifyBook, deleteBookById } = require('../services/book');
const { isValidId } = require('../utils/utils');
const { errorMessages, successMessages } = require('../config/messages');

function getBooks(req, res) {
    /* #swagger.responses[200] = {
            description: "Get all books",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/Books"
                    }
                }           
            }
        }   
    */

    try {
        const books = getAllBooks();
        res.send(books);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getBook(req, res) {
    /* #swagger.responses[200] = {
            description: "Get book by id",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/Book"
                    }
                }           
            }
        }   
    */

    try {
        const id = req.params.id;

        if (isValidId(id)) {
            const book = getBookById(id);
            res.send(book);
        } else {
            res.status(422);
            res.send(errors.INVALID_BOOK_ID);
        }
    } catch (error) {
        res.status(500); 
        res.send(error.message);
    }
}
 
function postBook(req, res) {
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Book"
                    }  
                }
            }
        } 
    */

    try {
        if (req.body.name) {
            insertBook(req.body);
            res.status(201);
            res.send(successMessages.SUCESS_BOOK_INSERT);
        } else {
            res.status(422);
            res.send(errorMessages.REQUIRED_NAME);
        }
    } catch (error) {
        res.status(500);
        res.send({error});
    }
}

function patchBook(req, res) {
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Book"
                    }  
                }
            }
        } 
    */

    const id = req.params.id;

    try {
        if (isValidId(id)) {
            const books = modifyBook(id, req.body);
            res.send(books);
        } else {
            res.status(422);
            res.send(errorMessages.INVALID_BOOK_ID);
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
            deleteBookById(id);
            res.send(successMessages.SUCESS_BOOK_DELETE);
        } else {
            res.status(422);
            res.send(errorMessages.INVALID_BOOK_ID);
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