const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Comment = new Schema({
  companyID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comment: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  reports: [
    {
      reportedAt: {
        type: Date,
        default: new Date()
      },
      userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      reason: {
        type: String
      }
    }
  ],
  status: {
    type: String,
    default: 'En attente de validation'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Comment', Comment);
