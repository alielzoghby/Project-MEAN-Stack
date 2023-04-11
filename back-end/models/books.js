const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
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
    // averageRating: {
    //   type: Number,
    //   default: 0,
    // },
    cover: {
      type: String,
      required: false,
    // default: '../public/defaultPhoto/defaultImage2.jpeg',
    },
    numberOfRatings: {
      type: Number,
      default: 1,
    },
    sumOfRatings: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
    },
    reviews: [
      {
        userId: {
          type: mongoose.Types.ObjectId,
          ref: 'users',
        },
        review: {
          type: String,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);
bookSchema.virtual('averageRating').get(function () {
  return this.sumOfRatings / this.numberOfRatings;
});
const Book = mongoose.model('Book', bookSchema);

module.exports = {
  Book,
};
