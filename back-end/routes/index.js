const express = require('express');

const categoriesRoutes = require('./categories');
const booksRoutes = require('./books');
const authorsRoutes = require('./authors');
const usersRoutes = require('./users');
const { fileParser } = require('../middlewares/fileParser');

const router = express.Router();

router.use(fileParser);
router.use('/users', usersRoutes);
router.use('/authors', authorsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/books', booksRoutes);

module.exports = router;
