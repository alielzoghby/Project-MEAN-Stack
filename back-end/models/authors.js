const mongoose = require('mongoose');

const { Schema } = mongoose;

const authorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
      default: '/public/defaultPhoto/defaultImage2.jpeg',
    },
    dob: {
      type: Date,
      optional: true,
    },
    bio: {
      type: String,
      required: false,
    },
  },
);

const Author = mongoose.model('Author', authorSchema);

module.exports = {
  Author,
};
