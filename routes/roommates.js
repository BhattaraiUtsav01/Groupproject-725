const express = require("express");
const router = express.Router();
const Roommate = require("../models/Roommate");

router.get("/", async (req, res) => {
  const data = await Roommate.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const roommate = new Roommate(req.body);
  await roommate.save();
  res.json(roommate);
});

module.exports = router;
