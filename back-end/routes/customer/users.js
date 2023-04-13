const express = require('express');
const { usersController } = require('../../controllers/index');

const router = express.Router();

router.patch('/:id', usersController.updateUserById);
router.get('/profile/', usersController.getUserById);
module.exports = router;
