const mongoose = require('mongoose');

const usersBooksSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
  },
  books: [{
    bookId: {
      type: mongoose.Types.ObjectId,
      ref: 'Book',
    },
    shelf: {
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
const UserBook = mongoose.model('usersBooks', usersBooksSchema);
module.exports = {
  UserBook,
};
