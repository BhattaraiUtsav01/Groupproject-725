const mongoose = require("mongoose");

const roommateSchema = new mongoose.Schema({
  name: String,
  age: Number,
  tags: [String],
  bio: String,
  budget: { min: Number, max: Number }
});

module.exports = mongoose.model("Roommate", roommateSchema);
