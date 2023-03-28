const express = require("express");
var cors = require("cors");

////to use file .env
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

///to use cors to connect between front and back
app.use(cors());

app.get("/", (req, res) => {
  console.log("connected");
  res.json({ hello: "world" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
