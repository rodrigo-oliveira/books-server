# Books API

This Books API is developed in Node.js and provides endpoints to manipulate information about books.

## Available Scripts

In the project directory, you can run:

### `npm start`

Start the server: http://localhost:8000

## API Documentation

The API consists of the following endpoints:

### 1. Get all books

**Endpoint:** `/books`  
**HTTP Method:** GET  
**Description:** Retrieves all books stored in the system.

### 2. Get book by ID

**Endpoint:** `/books/:id`  
**HTTP Method:** GET  
**URL Parameters:** `id` (unique book ID)  
**Description:** Returns a specific book based on the provided ID.

### 3. Insert new book

**Endpoint:** `/books`  
**HTTP Method:** POST  
**Request Body:** JSON containing details of the new book to be inserted.  
**Description:** Inserts a new book into the system.

### 4. Update book

**Endpoint:** `/books/:id`  
**HTTP Method:** PATCH  
**URL Parameters:** `id` (unique book ID)  
**Request Body:** JSON containing the fields to be updated.  
**Description:** Partially updates an existing book based on the provided ID.

### 5. Delete book

**Endpoint:** `/books/:id`  
**HTTP Method:** DELETE  
**URL Parameters:** `id` (unique book ID)  
**Description:** Deletes a specific book based on the provided ID.

## Using Postman Collection

To test and explore the endpoints of this API, you can import the provided collection in the repository. 