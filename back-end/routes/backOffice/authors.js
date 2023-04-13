const express = require('express');
const { authorsController } = require('../../controllers/index');

const router = express.Router();

router.post('/', authorsController.createNewAuthor);
router.get('/', authorsController.getAuthors);
router.get('/:authorId', authorsController.getAuthorById);
router.patch('/:authorId', authorsController.updateAuthorById);
router.delete('/:authorId', authorsController.deleteAuthorById);
router.get('/books/:authorId', authorsController.getBooksByAuthor);

router.get('/authors/popularAuthors', authorsController.getPopularListOfAuthors); //Not tested

module.exports = router;
