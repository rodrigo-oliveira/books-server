const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    openapi: '3.0.0',
    info: {
        version: '1.0.0',
        title: 'Books API',
        description: 'API for managing books',
    },
    servers: [
        {
          "url": "http://localhost:8000/"
        }
    ],
    components: {
        schemas: {
            Books: [
                {
                    id: "6",
                    $name: 'Book'
                }
            ],
            Book: {
                id: "6",
                $name: 'Book'
            },
            FavoriteBook: {
                id: "1",
                $name: 'Book'
            },
            FavoriteBooks: [[
                {
                    id: "1",
                    $name: 'Book'
                }
            ]]
        },
    },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/book.js','./routes/favoriteBooks.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index');           // Your project's root file
});