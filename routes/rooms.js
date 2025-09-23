const express = require("express");
const router = express.Router();
const Room = require("../models/Room");

router.get("/", async (req, res) => {
  const { min, max, suburb } = req.query;
  const q = {};
  if (min || max) q.pricePerWeek = {};
  if (min) q.pricePerWeek.$gte = Number(min);
  if (max) q.pricePerWeek.$lte = Number(max);
  if (suburb) q.suburb = new RegExp(suburb, "i");
  const data = await Room.find(q).sort({ pricePerWeek: 1 });
  res.json(data);
});

router.post("/", async (req, res) => {
  const room = new Room(req.body);
  await room.save();
  res.json(room);
});

module.exports = router;
