const express = require('express');

const categoriesRoutes = require('./categories');
const booksRoutes = require('./books');
const authorsRoutes = require('./authors');
const usersRoutes = require('./users');
const adminRoutes = require('./admin');
const usersBooksRoutes = require('./userBooks');
const { fileParser } = require('../middlewares/fileParser');
const errorMW = require('../middlewares/errorMW');

const router = express.Router();

router.use(fileParser);
router.use('/admin', adminRoutes);
router.use('/users', usersRoutes);
router.use('/authors', authorsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/books', booksRoutes);
router.use('/userBooks', usersBooksRoutes);
router.use(errorMW);

module.exports = router;
