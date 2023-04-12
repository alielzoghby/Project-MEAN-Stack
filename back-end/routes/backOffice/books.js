const express = require('express');

const router = express.Router();

const booksController = require('../../controllers/books');


router.get('/', booksController.getAllBooks);
router.get('/category/:categoryId', booksController.getBookByCategory);
router.get('/:id', booksController.getBookById);
router.post('/', booksController.addNewBook);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

module.exports = router;
