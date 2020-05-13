const mongoose = require('mongoose');

const User = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  account_name: String,
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  password: String
});

module.exports = mongoose.model('User', User);
