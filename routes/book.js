const { Router } = require('express');
const { getBooks, getBook, postBook, patchBook, deleteBook } = require('../controllers/book');
const router = Router();

router.get('/books', getBooks);
router.get('/books/:id', getBook);

router.post('/books', postBook);
router.patch('/books/:id', patchBook); 

router.delete('/books/:id', deleteBook);

module.exports = router;