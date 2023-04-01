const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  authorId: {
    type: mongoose.Types.ObjectId,
    ref: 'Author',
    //  required: true,
  },
  averageRating: {
    type: Number,
  },
  cover: {
    type: String,
    required: false,
    // default: '../public/defaultPhoto/defaultImage2.jpeg',
  },
  numberOfRatings: {
    type: Number,
  },
  description: {
    type: String,
  },
  reviews: {
    type: [String],
  },

});

bookSchema.pre('save', async function () {
  const book = this;
  if (!book.id) {
    const count = await Book.countDocuments();
    book.id = count + 1;
  }
});


const Book = mongoose.model('Book', bookSchema);

module.exports = {
  Book,
};
