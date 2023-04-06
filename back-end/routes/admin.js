const express = require('express');
const { adminController } = require('../controllers/index');


const router = express.Router();


router.post('/login', adminController.loginAdmin);
router.get('/getUser', adminController.getUserById);
router.get('/allUsers', adminController.getUsers);
router.delete('/deleteUser', adminController.deleteUserById);

module.exports = router;
