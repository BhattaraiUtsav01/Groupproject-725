const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  pricePerWeek: Number,
  suburb: String,
  lifestyle: [String],
  image: String
});

module.exports = mongoose.model("Room", roomSchema);
