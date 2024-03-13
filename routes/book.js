const { Router } = require('express');
const { getBooks, getBook, postBook, patchBook, deleteBook } = require('../controller/book');
const router = Router();

router.get('/', getBooks); //get all books
router.get('/:id', getBook); //get book by id

router.post('/', postBook); //insert new book
router.patch('/:id', patchBook); // modify book by id

router.delete('/:id', deleteBook); //delete book

module.exports = router;