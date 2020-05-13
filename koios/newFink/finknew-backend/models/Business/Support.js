const mongoose = require('mongoose');

const Support = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user_id: mongoose.Schema.Types.ObjectId,
  subject: String,
  content: String,
  created_at: Number
});

module.exports = mongoose.model('Support', Support);
