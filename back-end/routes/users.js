const express = require('express');
const { usersController } = require('../controllers/index');

const router = express.Router();

router.post('/sing-up', usersController.createUser);
router.post('/login', usersController.loginUser);
router.patch('/:id', usersController.updateUserById);

module.exports = router;
