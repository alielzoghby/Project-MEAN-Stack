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
    await Book.findByIdAndUpdate(req.body.bookId, { $inc: { Interactions: 1 } }, { returnOriginal: false });
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
  const userBook = await UserBook.findOne({ userId: req.currentUserId, 'books.bookId': req.body.bookId });
  const bookModified = userBook.books.find((b) => b.bookId == req.body.bookId);
  // if user didn't rate the bookk before
  if (!bookModified.rating) {
    await Book.findByIdAndUpdate(req.body.bookId, { $inc: { numberOfRatings: 1, sumOfRatings: req.body.rating } }, { returnOriginal: false });
  } else {
    await Book.findByIdAndUpdate(req.body.bookId, { $inc: { sumOfRatings: req.body.rating - bookModified.rating } }, { returnOriginal: false });
  }
  const newEntry = await UserBook.findOneAndUpdate({ userId: req.currentUserId, 'books.bookId': req.body.bookId }, { $set: { 'books.$.rating': req.body.rating } }, { returnOriginal: false });
  res.status(200).send(newEntry);
});
// update book shelf
const updateShelf = asyncFunction(async (req, res) => {
  const userBook = await UserBook.findOneAndUpdate({ userId: req.currentUserId, 'books.bookId': req.body.bookId }, { $set: { 'books.$.shelf': req.body.shelf } }, { returnOriginal: false });
  const book = await Book.findById(req.body.bookId);
  if (!book) {
    throw { status: 404, message: 'Book not found!' };
  }
  res.status(200).send(userBook);
});
// add review
const addReview = asyncFunction(async (req, res) => {
  const book = await Book.findById(req.body.bookId);
  if (!book) {
    throw { status: 404, message: 'Book not found!' };
  }
  const userBook = await UserBook.findOne({ userId: req.currentUserId, 'books.bookId': req.body.bookId });
  const bookModified = userBook.books.find((b) => b.bookId == req.body.bookId);
  // if user didn't rate the bookk before
  if (bookModified.review) {
    await Book.findByIdAndUpdate(req.body.bookId, { $pull: { reviews: { userId: req.currentUserId } } }, { returnOriginal: false });
  }
  const newEntry = await UserBook.findOneAndUpdate({ userId: req.currentUserId, 'books.bookId': req.body.bookId }, { $set: { 'books.$.review': req.body.review } }, { returnOriginal: false });
  const reviewObject = { userId: req.currentUserId, review: req.body.review };
  await Book.findByIdAndUpdate(req.body.bookId, { $push: { reviews: reviewObject } }, { returnOriginal: false });
  res.status(200).send(newEntry);
});

module.exports = {
  addBook,
  getUserBooks,
  addRating,
  updateShelf,
  addReview,
};
