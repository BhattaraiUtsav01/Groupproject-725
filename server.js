<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const roommateRoutes = require("./routes/roommates");
const roomRoutes = require("./routes/rooms");
const itemRoutes = require("./routes/items");
const financeRoutes = require("./routes/finance");

app.use("/api/roommates", roommateRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/finance", financeRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.log(err));
=======
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req,res)=> res.redirect("/home"));
["home","profile","rooms","supermarkets","shop","finance","community","dashboard"].forEach(p=>{
  app.get("/"+p,(req,res)=> res.sendFile(path.join(__dirname,"public/pages/"+p+".html")));
});
app.listen(PORT, ()=>console.log("Server running on http://localhost:"+PORT));
>>>>>>> b8f803203d01370b898ead66c4ae58e5e1993299
