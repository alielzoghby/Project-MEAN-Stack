// Any function in any controller will have the same structure

const asyncFunction = require('../middlewares/async');

const { Category } = require('../models/categories');

const addNewCategory = asyncFunction(async (req, res) => {
  const category = new Category({
    name: req.body.name,
  });
  category.save().then(() => {
    res.status(200).send(category);
  });
});
const getAllCategories = asyncFunction(async (req, res) => {
  const categories = await Category.find();
  // const categories = await Category.find().select({ _id: 0 });
  res.status(200).send(categories);
});
const getCategoryById = asyncFunction(async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.status(200).send(category);
});

const deleteCategory = asyncFunction(async (req, res) => {
  const category = await Category.findByIdAndRemove(req.params.id);
  res.status(200).send(category);
});

const updateCategory = asyncFunction(async (req, res) => {
  // eslint-disable-next-line max-len
  const category = await Category.findOneAndUpdate(req.params.id, req.body, { returnOriginal: false });
  res.status(200).send(category);
});
module.exports = {
  addNewCategory,
  getAllCategories,
  getCategoryById,
  deleteCategory,
  updateCategory,
};
