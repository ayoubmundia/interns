const moongoose = require('mongoose');

const feedbacks = moongoose.Schema({
  email: String,
  name: String,
  phone: String,
  feedback: String,
  userId: String,
  page: String,
  date: { type: Date, default: new Date() }
});

module.exports = moongoose.model('Feedbacks', feedbacks);
