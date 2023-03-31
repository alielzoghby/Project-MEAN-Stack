const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

// to store user photo
const storage = multer.diskStorage({
  destination: './public/usersPhotos/',
  filename(req, file, cb) {
    // if(req.file && req.file.filename){
    fileUUID = uuidv4();
    cb(null, `${file.originalname}-${fileUUID}`);
    // }
  },
});
  // upload photo
const upload = multer({ storage }).single('ProfileImage');

const fileParser = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: 'Error uploading file' });
    }
    next();
  });
};

module.exports = {
  fileParser,
};
