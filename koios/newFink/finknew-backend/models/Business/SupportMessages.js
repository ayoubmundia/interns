const mongoose = require('mongoose');

const SupportMessages = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  content: String,
  user_id: String,
  support_id: String,
  seen_at: Number,
  created_at: Number
});

module.exports = mongoose.model('SupportMessages', SupportMessages);
