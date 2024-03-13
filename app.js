const express = require('express');
const routeBooks = require('./routes/book')
const app = express();
const port = 8000;

app.use(express.json());
app.use('/books', routeBooks);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});