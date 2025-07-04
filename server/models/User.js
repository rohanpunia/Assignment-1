const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Not required for Google OAuth users
  googleId: { type: String }, // Only for Google login
});

module.exports = mongoose.model('User', userSchema);
