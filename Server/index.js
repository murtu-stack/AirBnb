const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/User.js");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.json("test ok");
});

const bcryptSalt = bcrypt.genSaltSync(10);
mongoose.connect(process.env.MONGO_URL);

console.log(process.env.MONGO_URL);
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email: email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      res.json("pass okk");
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.json("not found");
  }
});

app.listen(4000);
