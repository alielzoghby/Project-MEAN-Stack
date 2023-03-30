const express = require('express');

const categoriesRoutes = require('./categories');
const booksRoutes = require('./books');
const authorsRoutes = require('./authors');
const usersRoutes = require('./users');

const router = express.Router();
router.use('/categories', categoriesRoutes);
router.use('/books', booksRoutes);
router.use('/authors', authorsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
