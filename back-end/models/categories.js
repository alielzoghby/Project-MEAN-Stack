const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  numberOfBooks: {
    type: Number,
    default: 0,
  },

});

const Category = mongoose.model('Category', categorySchema);

module.exports = {
  Category,
};
