const express = require('express');

const router = express.Router();

const booksController = require('../../controllers/books');


router.get('/', booksController.getAllBooks);
router.get('/category/:categoryId', booksController.getBookByCategory);
router.get('/:id', booksController.getBookById);



module.exports = router;