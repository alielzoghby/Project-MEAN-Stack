const express = require('express');
const { authorsController } = require('../controllers/index');

const router = express.Router();

router.get('/', authorsController.getPopularListOfAuthors);
router.get('/getAuthors', authorsController.getAuthors);
router.get('/getAuthor', authorsController.getAuthorById);
router.get('/books/:authorId', authorsController.getBooksByAuthor);
router.post('/', authorsController.createNewAuthor);
router.delete('/:authorId', authorsController.deleteAuthorById);
router.patch('/updateAuthor', authorsController.updateAuthorById);
router.patch('/updateAuthorPhoto', authorsController.updateAuthorPhotoById);

module.exports = router;
