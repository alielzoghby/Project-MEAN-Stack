const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
  },
  numberOfBooks: {
    type: Number,
    default: 0,
  },

});

categorySchema.pre('save', async function () {
  const category = this;
  if (!category.id) {
    const count = await Category.countDocuments();
    category.id = count + 1;
  }
});
const Category = mongoose.model('Category', categorySchema);

module.exports = {
  Category,
};
