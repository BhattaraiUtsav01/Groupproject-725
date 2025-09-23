const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema({
  userId: String,
  owner: String,
  incomeSources: [{ source: String, amount: Number }],
  weeklyExpenses: {
    rent: Number,
    groceries: Number,
    transport: Number,
    entertainment: Number,
    other: Number
  },
  savingsGoal: Number
});

module.exports = mongoose.model("Finance", financeSchema);
