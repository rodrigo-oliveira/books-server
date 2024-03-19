const express = require('express');
const routeBooks = require('./routes/book');
const routeFavoriteBooks = require('./routes/favoriteBooks');

const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({}));
app.use('/livros', routeBooks);
app.use('/favoritos', routeFavoriteBooks);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
