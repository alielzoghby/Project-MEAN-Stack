const express = require('express');
const { usersController } = require('../controllers/index');

const router = express.Router();

router.post('/sing-up', usersController.createUser);
router.post('/login', usersController.loginUser);
router.get('/getUser', usersController.getUserById);
router.get('/allUsers', usersController.getUsers);
router.delete('/deleteUser', usersController.deleteUserById);
router.patch('/updateUserPhoto', usersController.updateUserPhotoById);
router.patch('/updateUser', usersController.updateUserById);

module.exports = router;
