const { Router } = require('express');
const { getFavoriteBooks, postFavoriteBook, deleteFavoriteBook } = require('../controllers/favoriteBooks');
const router = Router();

router.get('/favorites', getFavoriteBooks);
router.post('/favorites/:id', postFavoriteBook);
router.delete('/favorites/:id', deleteFavoriteBook);

module.exports = router;