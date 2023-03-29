const express = require('express');

const router = express.Router();
const { Category } = require('../models/categories');

// const categoriesController = require('../controllers/categories');

router.post('/', (req, res, next) => {
  const category = new Category({
    name: req.body.name,
  });
  res.send(category);
});

// router.post('/' , categoriesController.addNewCategory)

module.exports = router;
