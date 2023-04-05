const express = require('express');

const router = express.Router();

const userBooksController = require('../controllers/userBooks');
const currentUser = require('../middlewares/getCurrentUser');

router.post('/', currentUser, userBooksController.addBook);

module.exports = router;
