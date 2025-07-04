const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

const passport = require("passport");
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();
require("./config/passport");

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000  // 1 day
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
}).catch(err => console.error("❌ MongoDB connection failed:", err));
