const express = require('express');

const router = express.Router();

const categoriesController = require('../../controllers/categories');

router.get('/', categoriesController.getAllCategories);
router.get('/categories/popularCategories', categoriesController.getPopularListOfCategories);
router.get('/:id', categoriesController.getCategoryById);
router.post('/', categoriesController.addNewCategory);
router.put('/:id', categoriesController.updateCategory);
router.delete('/:id', categoriesController.deleteCategory);

module.exports = router;
