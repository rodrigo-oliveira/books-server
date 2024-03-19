const express = require('express');
const routeBooks = require('./routes/book');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({}));
app.use('/livros', routeBooks);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
