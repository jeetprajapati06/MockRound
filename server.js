const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const connectDB = require("./config/db");

const PORT = 3000;
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});     

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = bodyparser;