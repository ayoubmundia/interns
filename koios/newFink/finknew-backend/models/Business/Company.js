const mongoose = require('mongoose');

const Company = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user_id: mongoose.Schema.Types.ObjectId,
  company_id: String,
  accepted: Boolean
});

module.exports = mongoose.model('Company', Company);
