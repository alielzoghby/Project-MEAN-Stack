const express = require('express');

const router = express.Router();

const userBooksController = require('../controllers/userBooks');
const currentUser = require('../middlewares/getCurrentUser');

router.post('/', currentUser, userBooksController.addBook);
router.get('/:shelf', currentUser, userBooksController.getUserBooks);
// update book shelf
// add review
// add rating
// update rating -> At the end
// get user books based on shelf
// get all user books
// calculate average rating
module.exports = router;
