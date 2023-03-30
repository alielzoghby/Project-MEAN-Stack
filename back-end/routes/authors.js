const express = require('express');
const { authorsController } = require("../controllers/index"); 

const router = express.Router();

router.post('/newAuthor', authorsController.createNewAuthor);
router.get('/getAuthor', authorsController.getAuthorById);
router.delete('/deleteAuthor', authorsController.deleteAuthorById);
router.patch('/updateAuthor', authorsController.updateAuthorById);

module.exports = router;
