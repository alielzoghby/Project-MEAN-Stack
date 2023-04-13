const express = require('express');

const router = express.Router();

const booksController = require('../../controllers/books');

router.post('/', booksController.addNewBook);
router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBookById);
router.get('/category/:categoryId', booksController.getBooksByCategory);
router.patch('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

router.get('/popular/books', booksController.getPopularListOfBooks);

module.exports = router;
