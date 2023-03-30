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

///////////////////////////////// delete user ///////////////////////////////////////



///////////////////////////////// update user ///////////////////////////////////////




module.exports = {
    createUser,
    loginUser
}
