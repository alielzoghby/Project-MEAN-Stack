const express = require('express');

const router = express.Router();

const userBooksController = require('../../controllers/userBooks');
const currentUser = require('../../middlewares/getCurrentUser');

router.post('/', currentUser, userBooksController.addBook);
router.get('/:shelf', currentUser, userBooksController.getUserBooks);
router.patch('/add/review', currentUser, userBooksController.addReview);
router.patch('/shelf', currentUser, userBooksController.updateShelf);
router.patch('/rating', userBooksController.addRating);

module.exports = router;
