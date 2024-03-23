const { getAllFavoriteBooks, insertFavoriteBook, deleteFavoriteBookById } = require('../services/favoriteBooks');
const { successMessages, errorMessages } = require('../config/messages');
const { isValidId } = require('../utils/utils');

function getFavoriteBooks(req, res) {
    /* #swagger.responses[200] = {
            description: "Get favorite books",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/FavoriteBooks"
                    }
                }           
            }
        }   
    */

    try {
        const books = getAllFavoriteBooks();
        res.send(books);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postFavoriteBook(req, res) {
    try {
        insertFavoriteBook(req.params.id);
        res.status(201);
        res.send(successMessages.SUCESS_FAVORITE_BOOK_INSERT);
    } catch (error) {
        res.status(500);
        res.send({error});
    }
}

function deleteFavoriteBook(req, res) {
    const id = req.params.id;

    try {
        if (isValidId(id)) {   
            deleteFavoriteBookById(id);
            res.send(successMessages.SUCESS_FAVORITE_BOOK_DELETE);
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
    getFavoriteBooks,
    postFavoriteBook,
    deleteFavoriteBook
};