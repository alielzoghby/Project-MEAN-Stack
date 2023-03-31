const asyncFunction = require('../middlewares/async');

const { Book } = require('../models/books');

const addNewBook = asyncFunction(async (req, res) => {
  const book = new Book({
    name: req.body.name,
    categoryId: req.body.categoryId,
    authorId: req.body.authorId,
    cover: req.file && req.filename,
  });
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
  res.status(200).send(book);
});

const deleteBook = asyncFunction(async (req, res) => {
  const book = await Book.findByIdAndRemove(req.params.id);
  res.status(200).send(book);
});

const updateBook = asyncFunction(async (req, res) => {
  // eslint-disable-next-line max-len
  const book = await Book.findOneAndUpdate(req.params.id, req.body, { returnOriginal: false });
  res.status(200).send(book);
});

module.exports = {
  addNewBook,
  getAllBooks,
  getBookById,
  deleteBook,
  updateBook,
};
