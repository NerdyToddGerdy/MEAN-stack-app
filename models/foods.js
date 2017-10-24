const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: String,
  image: String,
  link: String,
  price: Number,
  currency: String,
  description: String,
  updatedTime: Number,
  showDetails: Boolean
});

const Foods = mongoose.model('Food', foodSchema);

module.exports = Foods;
