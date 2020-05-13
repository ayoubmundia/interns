const mongoose = require('mongoose');

const Member = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  phone: String,
  email: String,
  message: String,
  page: String,
  date: String,
  time: String
});

module.exports = mongoose.model('Member', Member);
