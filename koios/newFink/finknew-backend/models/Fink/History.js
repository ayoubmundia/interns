const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  query: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('History', HistorySchema);
