const express = require('express');
const { usersController } = require('../../controllers/index');

const router = express.Router();

router.patch('/:id', usersController.updateUserById);

module.exports = router;
