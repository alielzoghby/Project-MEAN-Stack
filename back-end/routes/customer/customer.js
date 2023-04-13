const express = require('express');
const userBooks = require('./userBooks');
const authRouter = require('./auth');
const user = require('./users');
const books = require('./books');
const authors = require('./authors');
const category = require('./categories');
const userAuthentication = require('../../middlewares/getCurrentUser');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/category', category);
router.use('/author', authors);
router.use('/book', books);

router.use(userAuthentication);
router.use('/user', user);
router.use('/userBooks', userBooks); // Not tested 

module.exports = router;
