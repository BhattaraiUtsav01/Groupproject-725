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
