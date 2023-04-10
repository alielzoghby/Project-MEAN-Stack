const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models/users');
const asyncFunction = require('../middlewares/async');

const { JWT_SECRET = 'test' } = process.env;

/// ///////////////////////////// login admin ///////////////////////////////////////////

const loginAdmin = asyncFunction(async (req, res) => {
  // check is user login with email already exist or not
  const { email, password } = req.body;
  const adminAuthentication = await User.findOne({ email }).exec();
  if (!adminAuthentication) {
    return res.status(401).send({ message: 'Incorrect Email or Password' });
  }
  // check password
  const isPasswordValid = adminAuthentication.verifyPassword(password);
  if (!isPasswordValid) {
    return res.status(401).send({ message: 'Incorrect Email or password' });
  }
  // if user is login with email and password, then login admin
  if (!adminAuthentication.isAdmin) {
    return res.status(401).send({ message: 'You are not allowed to login as admin' });
  }
  const token = jwt.sign({ id: adminAuthentication._id, adminRole: adminAuthentication.isAdmin }, JWT_SECRET, { expiresIn: '1d' });
  res.header('x-auth-token', token);
  res.status(200).send({ Token: token });
  // return token;
});

/// ///////////////////////////// get user by id ///////////////////////////////////////////

const getUserById = asyncFunction(async (req, res) => {
  const adminToken = req.headers.authorization;
  if (!adminToken) {
    return res.status(401).send({ message: 'You are not allowed to get this user' });
  }
  const { userId } = req.body;
  const oneUser = await User.findOne({ id: userId });
  if (!oneUser || oneUser === undefined) {
    throw { status: 404, message: 'User not found' };
  }
  res.status(200).send(oneUser);
});

/// /////////////////////////////// get all user ///////////////////////////////////////////

const getUsers = asyncFunction(async (req, res) => {
  const adminToken = req.headers.authorization;
  if (!adminToken) {
    return res.status(401).send({ message: 'You are not allowed to get all users' });
  }
  const users = await User.find();
  res.status(200).send(users);
});

/// ////////////////////////////////// delete user /////////////////////////////////////////

const deleteUserById = asyncFunction(async (req, res) => {
  const { userId } = req.body;
  const adminToken = req.headers.authorization;
  if (!adminToken) {
    return res.status(401).send({ message: 'You are not allowed to delete user' });
  }
  const deleteUser = await User.findOneAndDelete({ id: userId });
  if (!deleteUser || deleteUser === undefined) {
    return res.status(401).send({ message: 'User not found' });
  }
  res.status(200).send(`Deleted User: ${deleteUser}`);
});

module.exports = {
  loginAdmin,
  deleteUserById,
  getUserById,
  getUsers,
};
