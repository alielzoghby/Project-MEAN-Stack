const express = require('express');
const { usersController } = require('../../controllers/index');

const router = express.Router();



router.get('/getUser', usersController.getUserById);
router.get('/allUsers', usersController.getUsers);
router.delete('/deleteUser', usersController.deleteUserById);

module.exports = router;
