/* eslint-disable no-throw-literal */
const { Author } = require('../models/authors');
const { Book } = require('../models/books');
const asyncFunction = require('../middlewares/async');

/// /////////////////////////////////////// get authors //////////////////////////////////

const getAuthors = asyncFunction(async (req, res) => {
  const pageSize = 6;
  let page = req.query.page || 1;
  let skip = (page - 1) * pageSize; // currentPage = 4 ---> (4 - 1) * 8 then will count from number 25
  const totalBooks = await Author.countDocuments();
  const totalPages = Math.ceil(totalBooks / pageSize);
  if (page > totalPages) {
    // page = 1;
    throw { status: 404, message: 'There are no books on this page' };
  }
  const authors = await Author.find().skip(skip).limit(pageSize);
  res.status(200).send(authors);
});

/// //////////////////////////////// get author //////////////////////////////////////////

const getAuthorById = asyncFunction(async (req, res) => {
  const { authorId } = req.params;
  const oneAuthor = await Author.findById({ _id: authorId });
  if (!oneAuthor) {
    throw { status: 404, message: 'Author not found!' };
  }
  res.status(200).send(oneAuthor);
});

/// //////////////////////////////// create author ///////////////////////////////////////

const createNewAuthor = asyncFunction(async (req, res) => {
  const author = new Author({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dob: req.body.dateOfBirth,
    photo: req.file && req.file.filename,
    bio: req.body.bio,
  });
  author.save().then(() => { res.status(200).send(author); });
});

/// //////////////////////////////// delete author ///////////////////////////////////////

const deleteAuthorById = asyncFunction(async (req, res) => {
  const author = await Author.findByIdAndDelete({ _id: req.params.authorId });
  // const books = await Book.findOne({ authorId : req.params.authorId}).deleteMany();
  // console.log(books)
  if (!author) {
    throw { status: 404, message: 'Author not found!' };
  }
  res.status(200).send(`Deleted author: ${author.firstName}`);
  // and his books
});

/// //////////////////////////////// update author ///////////////////////////////////////

const updateAuthorById = asyncFunction(async (req, res) => {
  let photo;
  if (req.file) {
    photo = req.file.filename;
  }
  const {
    firstName, lastName, dob, bio,
  } = req.body;
  // eslint-disable-next-line max-len
  const author = await Author.findByIdAndUpdate({ _id: req.params.authorId }, {
    $set: {
      firstName, lastName, bio, dob, photo,
    },
  }, { new: true });
  if (!author) {
    throw { status: 404, message: 'Author not found!' };
  }
  res.status(200).send(author);
});

/// //////////////////////////////// update photo ////////////////////////////////////////

const updateAuthorPhotoById = asyncFunction(async (req, res) => {
  const { authorId } = req.params;
  const { filename } = req.file;
  // eslint-disable-next-line max-len
  const author = await Author.findByIdAndUpdate({ _id: authorId }, { $set: { photo: filename } }, { new: true });
  if (!author) {
    throw { status: 404, message: 'Author not found!' };
  }
  res.status(200).send(author);
});

/// ////////////////////////////// get popular list ///////////////////////////////////////////

const getPopularListOfAuthors = asyncFunction(async (req, res) => {
  // {categoryId:"643187aa6321613814c9e713"}
  const highRatingsOfBooks = await Book.find().populate({
    path: 'authorId',
  }).limit(3);
  //  console.log(highRatingsOfBooks);
  if (!highRatingsOfBooks || highRatingsOfBooks.length === 0) {
    throw { status: 404, message: 'No books exist' };
  }
  const popularAuthor = highRatingsOfBooks.map((book) => book.authorId); // story.author._id;
  if (!popularAuthor || popularAuthor.length === 0) {
    throw { status: 404, message: 'No authors exist' };
  }
  res.status(200).send(popularAuthor);
});

/// ////////////////////////////// get Books by Author ///////////////////////////////////////////

const getBooksByAuthor = asyncFunction(async (req, res) => {
  const author = await Author.findById(req.params.authorId);
  if (!author) {
    throw { status: 404, message: 'Author not found!' };
  }
  const pageSize = 8;
  let page = req.query.page || 1;
  // let skip = (page - 1) * pageSize;
  const totalBooks = await Book.find({ authorId: req.params.authorId }).countDocuments();
  const totalPages = Math.ceil(totalBooks / pageSize);
  if (page > totalPages) {
    page = 1;
    // throw { status: 404, message: 'There are no books on this page' };
  }
  const skip = (page - 1) * pageSize;
  const books = await Book.find({ authorId: req.params.authorId }).skip(skip).limit(pageSize);
  if (!books) {
    throw { status: 404, message: 'There are no books for this author' };
  }
  res.status(200).send({ page, data: books, totalPages });
});

module.exports = {
  createNewAuthor,
  getAuthors,
  getAuthorById,
  deleteAuthorById,
  updateAuthorById,
  updateAuthorPhotoById,
  getPopularListOfAuthors,
  getBooksByAuthor,
};
