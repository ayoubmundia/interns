const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubCategory = new Schema({
  name: {
    type: String
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

module.exports = mongoose.model('SubCategory', SubCategory);
