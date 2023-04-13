const express = require('express');

const backOffice = require('./backOffice/backOffice');
const customer = require('./customer/customer');

const { fileParser } = require('../middlewares/fileParser');
const errorMW = require('../middlewares/errorMW');

const router = express.Router();

router.use(fileParser);
router.use('/backOffice', backOffice);
router.use('/', customer);
router.use(errorMW);

module.exports = router;
