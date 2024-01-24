const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const User = require("./models/User.js");
require("dotenv").config();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/test", (req, res) => {
  res.json("test ok");
});
const jwtSecret = "oejrnoubfiueqbgiuebiu";
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
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.json("not found");
  }
});
app.get("/get_profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    console.log(token);
    jwt.verify(token, jwtSecret, {}, async (err, tokenData) => {
      if (err) throw err;
      else {
        const { email, name, _id } = await User.findById(tokenData.id);
        res.json({ name, email, _id });
      }
    });
  } else {
    res.json(null);
  }
});
app.post("/logout", (req, res) => {
  res.cookie("token", "").json("true");
});
app.listen(4000);
