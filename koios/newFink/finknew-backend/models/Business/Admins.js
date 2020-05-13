const mongoose = require('mongoose');

const Admins = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  admin: Boolean,
  email: String,
  fristname: String,
  lastname: String,
  moderateur: Boolean,
  password: String,
  support: Boolean,
  date: String,
  time: String
});

module.exports = mongoose.model('Admins', Admins);
