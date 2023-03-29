const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { User } = require('../models/users');

// create user
// to store user photo
const storage = multer.diskStorage({
  destination: './public/usersPhotos/',
  filename(req, file, cb) {
    fileUUID = uuidv4();
    // console.log(fileUUID);
    cb(null, `${file.originalname}-${fileUUID}`);
  },
});
  // to upload user photo
const upload = multer({ storage }).single('testImage');
// upload photo
function createUser(req, res, err) {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        photo: req.file.filename,
      });
      user.save().then(() => res.json(user));
    }
  });
}

module.exports = {
  createUser,
};
