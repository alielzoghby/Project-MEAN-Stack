const { User } = require("../models/users");
const asyncFunction = require('../middlewares/async');

////////////////////////////// create user (register) /////////////////////////////////
 
const createUser = asyncFunction(async (req, res) => {
  debugger;
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    isAdmin:req.body.admin,
    password: req.body.password,
    photo: req.file && req.file.filename
  });
  user.save().then(() => { res.status(200).send(user);})
});

///////////////////////////////// login user /////////////////////////////////////////

function loginUser(){
  console.log("login");
}

///////////////////////////////// login user /////////////////////////////////////////

const getUserById = asyncFunction(async (req, res) => {
  const { userId } = req.body
  const oneUser = await User.findById({ _id: userId });
  res.status(200).send(oneUser);
});

///////////////////////////////// login user /////////////////////////////////////////

const getUsers = asyncFunction(async (req, res) => {
  const users = await User.find();
      res.status(200).send(users);
});
  
///////////////////////////////// delete user ///////////////////////////////////////

const deleteUserById = asyncFunction(async (req, res) => {
  const { userId } = req.body;
  const deleteUser =  await User.findOneAndDelete({ _id: userId});
  res.status(200).send( `Deleted User: ${deleteUser}` );
})

///////////////////////////////// update user ///////////////////////////////////////

const updateUserById = asyncFunction(async (req, res) => {
const { userId, firstName, lastName, password, email } = req.body;
  const updateUser = await User.findOneAndUpdate({ _id : userId }, { $set: { firstName: firstName, lastName: lastName, password: password, email: email } }, { new: true });
  res.status(200).send( `Update User: ${updateUser}` );
})

///////////////////////////////// update user Photo ///////////////////////////////////////

const updateUserPhotoById = asyncFunction(async (req, res) => {
  const { userId } = req.body;
  const { filename } = req.file;
  const userPhoto = await User.findOneAndUpdate({ _id : userId }, { $set: { photo: filename } }, { new: true });
  res.status(200).send(userPhoto);
})

module.exports = {
    createUser,
    loginUser,
    getUserById,
    getUsers,
    deleteUserById,
    updateUserById,
    updateUserPhotoById
}
