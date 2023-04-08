/* eslint-disable no-throw-literal */
const asyncFunction = require('../middlewares/async');

const { Book } = require('../models/books');
const { Category } = require('../models/categories');

const addNewBook = asyncFunction(async (req, res) => {
  const book = new Book({
    name: req.body.name,
    categoryId: req.body.categoryId,
    authorId: req.body.authorId,
    cover: req.file && req.file.filename,
  });
  // eslint-disable-next-line max-len
  const category = await Category.findByIdAndUpdate(req.body.categoryId, { $inc: { numberOfBooks: 1 } }, { returnOriginal: false });
  category.save();
  book.save().then(() => {
    res.status(200).send(book);
  });
});

const getAllBooks = asyncFunction(async (req, res) => {
  const books = await Book.find();
  // const books = await Book.find().select({ _id: 0 });
  res.status(200).send(books);
});

const getBookById = asyncFunction(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    throw { status: 404, message: 'Book not found!' };
  }
  res.status(200).send(book);
});
const getBookByCategory = asyncFunction(async (req, res) => {
  const books = await Book.find({ categoryId: req.params.categoryId });
  res.status(200).send(books);
});
const deleteBook = asyncFunction(async (req, res) => {
  const book = await Book.findByIdAndRemove(req.params.id);
  if (!book) {
    throw { status: 404, message: 'Book not found!' };
  }
  // eslint-disable-next-line max-len
  const category = await Category.findByIdAndUpdate(book.categoryId, { $inc: { numberOfBooks: -1 } }, { returnOriginal: false });
  category.save();
  res.status(200).send(book);
});

const updateBook = asyncFunction(async (req, res) => {
  // eslint-disable-next-line max-len
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { returnOriginal: false });
  if (!book) {
    throw { status: 404, message: 'Book not found!' };
  }res.status(200).send(book);
});

module.exports = {
  addNewBook,
  getAllBooks,
  getBookById,
  deleteBook,
  updateBook,
  getBookByCategory,
};
