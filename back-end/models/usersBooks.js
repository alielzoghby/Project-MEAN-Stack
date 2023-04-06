const mongoose = require('mongoose');

const usersBooksSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
  },
  books: [{
    bookId: {
      type: mongoose.Types.ObjectId,
      ref: 'books',
    },
    shelve: {
      type: String,
      enum: ['Want to read', 'Read', 'Reading'],
      default: 'Want to read',
    },
    rating: {
      type: Number,
    },
    review: {
      type: String,
    },
  },
  ],
});
const usersBooks = mongoose.model('usersBooks', usersBooksSchema);
module.exports = usersBooks;
