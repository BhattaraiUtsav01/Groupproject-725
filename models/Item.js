const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  sellerEmail: String,
  dateListed: { type: Date, default: Date.now },
  image: String
});

module.exports = mongoose.model("Item", itemSchema);
