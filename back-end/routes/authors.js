const express = require('express');
const { authorsController } = require('../controllers/index');

const router = express.Router();

router.get('/getAuthors', authorsController.getAuthors);
router.get('/getAuthor', authorsController.getAuthorById);
router.post('/newAuthor', authorsController.createNewAuthor);
router.delete('/deleteAuthor', authorsController.deleteAuthorById);
router.patch('/updateAuthor', authorsController.updateAuthorById);
router.patch('/updateAuthorPhoto', authorsController.updateAuthorPhotoById);


module.exports = router;
