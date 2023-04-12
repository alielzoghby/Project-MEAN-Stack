const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Admin } = require('../models/admin');
const asyncFunction = require('../middlewares/async');

const { JWT_SECRET = 'test' } = process.env;

/// ///////////////////////////// login admin ///////////////////////////////////////////

const loginAdmin = asyncFunction(async (req, res) => {
    // check is user login with email already exist or not
    const { email, password } = req.body;
    const adminAuthentication = await Admin.findOne({ email }).exec();
    if (!adminAuthentication) {
      throw { status: 401, message: 'Incorrect Email or Password' };
    }
    // check password
    const isPasswordValid = adminAuthentication.verifyPassword(password);
    if (!isPasswordValid) {
        throw { status: 401, message: 'Incorrect Email or password' };
    }
    // if user is login with email and password, then login admin
    // if(!adminAuthentication.isAdmin){
    //     throw {status: 401, message: 'You are not allowed to login as admin' };
    // }
    const token = jwt.sign({ id: adminAuthentication._id, role: 'admin' }, JWT_SECRET, { expiresIn: '1d' });
    res.header('x-auth-token', token);
    res.status(200).send({ Token: token });
});



module.exports = {
  loginAdmin,
};
