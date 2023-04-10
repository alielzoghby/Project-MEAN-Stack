const express = require('express');

const router = express.Router();

const userBooksController = require('../controllers/userBooks');
const currentUser = require('../middlewares/getCurrentUser');

router.post('/', currentUser, userBooksController.addBook);
router.put('/rating', currentUser, userBooksController.addRating);
router.get('/:shelf', currentUser, userBooksController.getUserBooks);
router.put('/shelf', currentUser, userBooksController.updateShelf);
router.put('/add/review', currentUser, userBooksController.addReview);

module.exports = router;
