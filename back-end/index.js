const express = require('express');
const mongoClient = require('mongoose');
const cors = require('cors');
const { userController } = require('./controllers/index');
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


app.post('/createUser', userController.createUser)
app.get('/', (req, res) => {
  console.log('connected');
  res.json({ hello: 'world' });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
