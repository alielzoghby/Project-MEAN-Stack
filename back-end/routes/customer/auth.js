const express = require('express');
const { usersController } = require('../../controllers/index');

const router = express.Router();


router.post('/login', usersController.loginUser);
router.post('/sing-up', usersController.createUser);



module.exports = router;
