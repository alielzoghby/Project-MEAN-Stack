const express = require('express');
const books = require('./books');
const categories = require('./categories');
const authors = require('./authors');
const authRouter = require('./auth');
const user = require('./user');
const adminAuthentication = require('../../middlewares/authorizeAdmin');


const router = express.Router();


router.use('/auth', authRouter);
router.use(adminAuthentication);
router.use('/book', books);
router.use('/author', authors);
router.use('/category', categories);


module.exports = router;