/* eslint-disable no-throw-literal */
const asyncFunction = require('../middlewares/async');

const { Book } = require('../models/books');
const { Category } = require('../models/categories');


/////////////////////////////////////////// add Books //////////////////////////////////


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


/////////////////////////////////////////// get all Books //////////////////////////////////


const getAllBooks = asyncFunction(async (req, res) => {
  const pageSize = 8;
  let page = req.query.page || 1;
  const totalBooks = await Book.countDocuments();
  let totalPages = Math.ceil(totalBooks / pageSize);
  if(page > totalPages){
    page = 1;
    // throw { status: 404, message: 'There are no books on this page' };
  }
  let skip = (page - 1) * pageSize; // currentPage = 4 ---> (4 - 1) * 8 then will count from number 25
  const books = await Book.find().skip(skip).limit(pageSize);
  // const books = await Book.find().select({ _id: 0 });

  res.status(200).send({ page, data: books, totalPages });
});


/////////////////////////////////////////// get Book by id //////////////////////////////////


const getBookById = asyncFunction(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    throw { status: 404, message: 'Book not found!' };
  }
  res.status(200).send(book);
});


/////////////////////////////////////////// get Book by category //////////////////////////////////


const getBookByCategory = asyncFunction(async (req, res) => {
  const pageSize = 8;
  let page = req.query.page || 1;
  const totalBooks = await Book.find({ categoryId: req.params.categoryId }).countDocuments();
  let totalPages = Math.ceil(totalBooks / pageSize);
  if(page > totalPages){
    page = 1;
    // throw { status: 404, message: 'There are no books on this page' };
  }
  let skip = (page - 1) * pageSize; 
  const books = await Book.find({ categoryId: req.params.categoryId }).skip(skip).limit(pageSize);
  if(!books){
    throw { status: 404, message: 'There are no books on this category' };
  }
  res.status(200).send({ page, data: books, totalPages });
});


/////////////////////////////////////////// delete Books //////////////////////////////////


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


/////////////////////////////////////////// update Book //////////////////////////////////


const updateBook = asyncFunction(async (req, res) => {
  // eslint-disable-next-line max-len
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { returnOriginal: false });
  if (!book) {
    throw { status: 404, message: 'Book not found!' };
  }res.status(200).send(book);
});


/////////////////////////////////////////// get Average Rating //////////////////////////////////


const getAverageRating = asyncFunction(async (req, res) => {
  const book = await Book.findById(req.params.bookId);
  if (!book) {
    throw { status: 404, message: 'Book not found!' };
  }

  if (book.numberOfRatings === 0) {
    res.status(200).json(book.sumOfRatings);
  }
  const averageRating = book.sumOfRatings / book.numberOfRatings;
 
  res.status(200).json(averageRating);
});


/////////////////////////////////////////// get Popular Books //////////////////////////////////


const getPopularListOfBooks = asyncFunction(async (req, res) => {
  const books = await Book.find().sort({ 'averageRating': -1 }).limit(8);
  if(!books){
    throw { status: 404, message: 'No books found!' };
  }
  res.status(200).json(books);
})




module.exports = {
  addNewBook,
  getAllBooks,
  getBookById,
  deleteBook,
  updateBook,
  getBookByCategory,
  getAverageRating,
  getPopularListOfBooks
};
