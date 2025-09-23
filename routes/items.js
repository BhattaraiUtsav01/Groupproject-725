const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.get("/", async (req, res) => {
  const { q, category, sort } = req.query;
  const filter = {};
  if (q) filter.$text = { $search: q };
  if (category) filter.category = category;
  const sortOpt = sort === "price_asc" ? { price: 1 } : sort === "price_desc" ? { price: -1 } : { dateListed: -1 };
  const data = await Item.find(filter).sort(sortOpt);
  res.json(data);
});

router.post("/", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

module.exports = router;
