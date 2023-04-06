/* eslint-disable max-len */
/* eslint-disable no-throw-literal */
const asyncFunction = require('../middlewares/async');

const { Book } = require('../models/books');

const { UserBook } = require('../models/usersBooks');

const addBook = asyncFunction(async (req, res) => {
  const book = await Book.findById(req.body.bookId);
  if (!book) {
    throw { status: 404, message: 'Book not found!' };
  }
  const userBookInstance = await UserBook.findOne({ userId: req.currentUserId, 'books.bookId': req.body.bookId });
  let newEntry;
  if (userBookInstance) {
    newEntry = await UserBook.findOneAndUpdate({ userId: req.currentUserId, 'books.bookId': req.body.bookId }, { $set: { 'books.$.shelf': req.body.shelf } }, { returnOriginal: false });
  } else {
    const newBook = { bookId: req.body.bookId, shelf: req.body.shelf };
    newEntry = await UserBook.findOneAndUpdate({ userId: req.currentUserId }, { $push: { books: newBook } }, { returnOriginal: false });
  }
  res.status(200).send(newEntry);
});
// add review
// add rating
// update rating -> At the end
// get user books based on shelf
// get all user books
// calculate average rating 

module.exports = {
  addBook,
};
