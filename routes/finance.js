const express = require("express");
const router = express.Router();
const Finance = require("../models/Finance");

// Get by userId
router.get("/:userId", async (req, res) => {
  const data = await Finance.findOne({ userId: req.params.userId });
  res.json(data);
});

// Create or update
router.post("/", async (req, res) => {
  const { userId } = req.body;
  const updated = await Finance.findOneAndUpdate({ userId }, req.body, { new: true, upsert: true });
  res.json(updated);
});

// Quick budget summary (computed, no storage)
router.post("/summary", async (req, res) => {
  const { incomeSources = [], weeklyExpenses = {} } = req.body;
  const income = incomeSources.reduce((s, v) => s + (Number(v.amount)||0), 0);
  const expenses = ["rent","groceries","transport","entertainment","other"].reduce((s,k)=> s + (Number(weeklyExpenses[k])||0), 0);
  const savings = income - expenses;
  const rate = income ? (savings / income) * 100 : 0;
  res.json({ income, expenses, savings, savingsRate: Number(rate.toFixed(2)) });
});

module.exports = router;
