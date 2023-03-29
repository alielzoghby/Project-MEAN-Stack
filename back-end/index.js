const express = require('express');
const mongoClient = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const { User } = require('./models/users');
require('dotenv').config(); // to use file .env


const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

/// to use cors to connect between front and back
app.use(cors());
app.use(express.json());

// connect on mongoose
mongoClient.connect(MONGO_URL)
            .then(() => {
              console.log('Connected to database');
            }).catch((error) => {
              console.log('Error connecting to database', error);
            });;


////////////////////////////////////////////// test case ////////////////////////////////////////////////////////////

// to store user photo
const storage = multer.diskStorage({
  destination: './public/usersPhotos/',
    filename: function (req, file, cb) {
      cb(null, file.originalname)
      }
      });
// to upload user photo
const upload = multer({ storage: storage }).single("testImage");
// upload photo
app.post('/userPhoto', (req, res, err)=>{
  upload(req, res, (err)=>{
    if(err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        photo: { 
          data: req.file.filename, 
          contentType: 'image/jpg'
        }
      });
      user.save().then(()=>res.send("upload done"))
    }
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////


app.get('/', (req, res) => {
  console.log('connected');
  res.json({ hello: 'world' });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
