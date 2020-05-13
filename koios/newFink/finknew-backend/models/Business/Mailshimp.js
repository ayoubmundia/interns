const mongoose = require('mongoose');

const Mailshimp = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  phone: String,
  message: String,
  page: String
});

module.exports = mongoose.model('Mailshimp', Mailshimp);
