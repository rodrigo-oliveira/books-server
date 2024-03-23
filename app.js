const express = require('express');
const routeBooks = require('./routes/book');
const routeFavoriteBooks = require('./routes/favoriteBooks');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({}));
app.use('/', routeBooks);
app.use('/', routeFavoriteBooks);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
