const express = require('express');
const { adminController } = require('../../controllers/index');

const router = express.Router();


router.post('/login', adminController.loginAdmin);




module.exports = router;
