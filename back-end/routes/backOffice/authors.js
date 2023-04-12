const express = require('express');
const { authorsController } = require('../../controllers/index');

const router = express.Router();

router.get('/', authorsController.getPopularListOfAuthors);
router.get('/getAuthors', authorsController.getAuthors);
router.get('/books/:authorId', authorsController.getBooksByAuthor);
router.get('/:authorId', authorsController.getAuthorById);
router.post('/', authorsController.createNewAuthor);
router.patch('/:authorId', authorsController.updateAuthorById);
router.patch('/updateAuthorPhoto/:authorId', authorsController.updateAuthorPhotoById);
router.delete('/:authorId', authorsController.deleteAuthorById);

module.exports = router;