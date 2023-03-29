const express = require('express');

const router = express.Router();
const { Book } = require('../models/books');

// const booksController = require('../controllers/books');

router.post('/', (req, res, next) => {
  const book = new Book({
    name: req.body.name,
    categoryId: req.body.categoryId,
  });
  res.send(book);
});

// router.post('/' , booksController.addNewBook)
module.exports = router;
