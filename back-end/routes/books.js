const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');

router.post('/', booksController.addNewBook);
router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBookById);
router.delete('/:id', booksController.deleteBook);
router.put('/:id', booksController.updateBook);
router.get('/category/:categoryId', booksController.getBookByCategory);

module.exports = router;
