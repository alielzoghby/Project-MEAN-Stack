const mongoose = require('mongoose');

const usersBooksSchema = new mongoose.Schema({

  bookId: {
    type: mongoose.Types.ObjectId,
  },
  userId: {
    type: mongoose.Types.ObjectId,
  },
  shelve: {
    type: String,
    enum: ['Want to read', 'Read', 'Reading'],
    default: 'Want to read',
  },
  rating: {
    type: Number,
  },
});
const usersBooks = mongoose.model('usersBooks', usersBooksSchema);
module.exports = usersBooks;
