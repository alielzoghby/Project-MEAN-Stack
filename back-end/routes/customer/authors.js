const express = require('express');
const { authorsController } = require('../../controllers/index');

const router = express.Router();

router.get('/', authorsController.getPopularListOfAuthors); // Not tested
router.get('/getAuthors', authorsController.getAuthors);
router.get('/books/:authorId', authorsController.getBooksByAuthor); // Not tested
router.get('/:authorId', authorsController.getAuthorById);

module.exports = router;
