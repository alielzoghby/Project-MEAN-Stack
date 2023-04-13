/* eslint-disable no-throw-literal */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models/users');
const asyncFunction = require('../middlewares/async');
const { UserBook } = require('../models/usersBooks');

const { JWT_SECRET = 'test' } = process.env;

const addUserToUserBooks = function addUserToUserBooks(userId) {
  const userbook = new UserBook({
    userId,
  });
  userbook.save();
};

/// ////////////////////////////// create user (register) /////////////////////////////////

const createUser = asyncFunction(async (req, res) => {
  let user = await User.findOne({ email: req.body.email }).exec();
  if (user) {
    throw { status: 400, message: 'User already registered' };
  }
  user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    photo: req.file && req.file.filename,
  });
  addUserToUserBooks(user._id);
  user.save().then(() => { res.status(200).send(user); });
});

/// /////////////////////////////// login user ///////////////////////////////////////////

const loginUser = asyncFunction(async (req, res) => {
  // check is user login with email already exist or not
  const { email, password } = req.body;
  const userAuthentication = await User.findOne({ email }).exec();
  if (!userAuthentication) {
    throw { status: 401, message: 'Incorrect Email or Password' };
  }
  // check password
  const isPasswordValid = userAuthentication.verifyPassword(password);
  if (!isPasswordValid) {
    throw { status: 401, message: 'Incorrect Email or password' };
  }
  const token = jwt.sign({ id: userAuthentication._id, role: 'user' }, JWT_SECRET, { expiresIn: '1d' });
  res.header('x-auth-token', token);
  res.status(200).send({ Token: token });
});

/// ////////////////////////////// get user by id ///////////////////////////////////////////

const getUserById = asyncFunction(async (req, res) => {
  const oneUser = await User.findById(req.currentUserId);
  if (!oneUser || oneUser === undefined) {
    throw { status: 404, message: 'User not found' };
  }
  res.status(200).send(oneUser);
});

/// //////////////////////////////// get all user ///////////////////////////////////////////

const getUsers = asyncFunction(async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
});

/// /////////////////////////////////// delete user /////////////////////////////////////////

const deleteUserById = asyncFunction(async (req, res) => {
  const { userId } = req.body;
  const deleteUser = await User.findOneAndDelete({ id: userId });
  if (!deleteUser || deleteUser === undefined) {
    throw { status: 401, message: 'User not found' };
  }
  res.status(200).send(`Deleted User: ${deleteUser}`);
});

/// ///////////////////////////////// update user ///////////////////////////////////////

const updateUserById = asyncFunction(async (req, res) => {
  const { id } = req.params;
  let photo;
  if (req.file) {
    photo = req.file.filename;
  }

  const {
    firstName, lastName, password, email,
  } = req.body;
  const user = await User.findById(id).exec();
  if (!user) {
    throw { status: 404, message: 'User not found' };
  }

  const updateUser = await User.findByIdAndUpdate({ _id: id }, {
    $set: {
      firstName, lastName, password, email, photo,
    },
  }, { new: true });
  if (!updateUser) {
    throw { status: 406, message: 'Request not acceptable' };
  }
  updateUser.save();
  res.status(200).send(`Update User: ${updateUser}`);
});

module.exports = {
  createUser,
  loginUser,
  getUserById,
  getUsers,
  deleteUserById,
  updateUserById,
};
