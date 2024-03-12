const express = require('express');
const routeBooks = require('./routes/book')
const app = express();
const port = 8000;

app.use('/books', routeBooks)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
});