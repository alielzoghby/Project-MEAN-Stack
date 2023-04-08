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

// get user books based on shelf
const getUserBooks = asyncFunction(async (req, res) => {
  let userBooks;
  if (req.params.shelf === 'all') {
    userBooks = await UserBook.find({ userId: req.currentUserId })
      .populate('books.bookId').select({ books: 1, _id: 0 });
  } else {
    userBooks = await UserBook.find({ userId: req.currentUserId, 'books.shelf': req.params.shelf })
      .populate('books.bookId').select({ books: { $elemMatch: { shelf: req.params.shelf } }, _id: 0 });
  }
  res.status(200).send(userBooks);
});
// add rating
const addRating = asyncFunction(async (req, res) => {
  const book = await Book.findById(req.body.bookId);
  if (!book) {
    throw { status: 404, message: 'Book not found!' };
  }
  const newEntry = await UserBook.findOneAndUpdate({ userId: req.currentUserId, 'books.bookId': req.body.bookId }, { $set: { 'books.$.rating': req.body.rating } }, { returnOriginal: false });
  const bookNew = await Book.findOneAndUpdate(req.body.bookId, { $set: { numberOfRatings: book.numberOfRatings + 1 } }, { returnOriginal: false });
  res.status(200).send(newEntry);
});
// update book shelf
const updateShelf = asyncFunction(async (req, res) => {
  const userBook = await UserBook.findOneAndUpdate({ userId: req.currentUserId, 'books.bookId': req.params.id }, { $set: { 'books.$.shelf': req.body.shelf } }, { returnOriginal: false });
  res.status(200).send(userBook);
});

// add review
// calculate average rating

module.exports = {
  addBook,
  getUserBooks,
  addRating,
  updateShelf,
};
