const express = require('express');

const router = express.Router();

const userBooksController = require('../controllers/userBooks');
const currentUser = require('../middlewares/getCurrentUser');

router.post('/', currentUser, userBooksController.addBook);
router.post('/rating', currentUser, userBooksController.addRating);
router.get('/:shelf', currentUser, userBooksController.getUserBooks);
router.put('/:id', currentUser, userBooksController.updateShelf);
// update book shelf
// add review
// update rating -> At the end
// calculate average rating
module.exports = router;
