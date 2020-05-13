const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Message = new Schema({
  companyID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Message', Message);
