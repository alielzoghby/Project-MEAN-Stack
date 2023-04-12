const express = require('express');

const router = express.Router();

const categoriesController = require('../../controllers/categories');

router.get('/', categoriesController.getAllCategories);
router.get('/categories/popularCategories', categoriesController.getPopularListOfCategories);
router.get('/:id', categoriesController.getCategoryById);

module.exports = router;
