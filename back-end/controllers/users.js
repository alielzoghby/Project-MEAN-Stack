/* eslint-disable no-throw-literal */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models/users');
const asyncFunction = require('../middlewares/async');

const { JWT_SECRET = 'test' } = process.env;



/////////////////////////////// create user (register) /////////////////////////////////

const createUser = asyncFunction(async (req, res) => {
  //  debugger;
  let user = await User.findOne({ email: req.body.email }).exec();
  if (user) {
    // res.statusCode = 400;
    throw { status: 400, message: 'User already registered' };
  }
  user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    isAdmin: req.body.admin,
    password: req.body.password,
    photo: req.file && req.file.filename,
  });
  user.save().then(() => { res.status(200).send(user); });
});


//////////////////////////////// login user ///////////////////////////////////////////


const loginUser = asyncFunction(async (req, res) => {
  // check is user login with email already exist or not
  const { email, password } = req.body;
  const userAuthentication = await User.findOne({ email }).exec();
  if (!userAuthentication) {
    return res.status(401).send({ error: 'Incorrect Email or Password' });
  }
  // check password
  const isPasswordValid = userAuthentication.verifyPassword(password);
  if (!isPasswordValid) {
    return res.status(401).send({ error: 'Incorrect Email or password' });
  }
  const token = jwt.sign({ id: userAuthentication._id, adminRole: userAuthentication.isAdmin }, JWT_SECRET, { expiresIn: '1d' });
  res.header('x-auth-token', token);
  res.status(200).send({ Token: token });
  // return token;
});


//////////////////////////////// get user by id ///////////////////////////////////////////


// const getUserById = asyncFunction(async (req, res) => {
//   const { userId } = req.body;
//   const oneUser = await User.findById({ id: userId });
//   res.status(200).send(oneUser);
// });


////////////////////////////////// get all user ///////////////////////////////////////////


// const getUsers = asyncFunction(async (req, res) => {
//   const users = await User.find();
//   res.status(200).send(users);
// });


///////////////////////////////////// delete user /////////////////////////////////////////


// const deleteUserById = asyncFunction(async (req, res) => {
//   const { userId } = req.body;
//   const deleteUser = await User.findOneAndDelete({ id: userId });
//   res.status(200).send(`Deleted User: ${deleteUser}`);
// });


////////////////////////////////// update user ///////////////////////////////////////

const updateUserById = asyncFunction(async (req, res) => {
  const { id } = req.params;
  const { filename } = req.file;
  const {
    firstName, lastName, password, email
  } = req.body;
  const updateUser = await User.findByIdAndUpdate({ _id: id }, {
    $set: {
      firstName: firstName, lastName: lastName, password: password, email: email, photo: filename
    },
  }, { new: true });
  res.status(200).send(`Update User: ${updateUser}`);
});

/// ////////////////////////////// update user Photo ///////////////////////////////////////

// const updateUserPhotoById = asyncFunction(async (req, res) => {
//   const { userId } = req.body;
//   const { filename } = req.file;
//   // eslint-disable-next-line max-len
//   const userPhoto = await User.findOneAndUpdate({ id: userId }, { $set: { photo:  } }, { new: true });
//   res.status(200).send(userPhoto);
// });

module.exports = {
  createUser,
  loginUser,
  updateUserById,
  // updateUserPhotoById,
};
