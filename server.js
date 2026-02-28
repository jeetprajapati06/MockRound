const express = require("express");
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const connectDB = require("./config/db");
const user = require("./modles/user")

const PORT = 3000;
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
}); 

app.post("./",(req,res)=>{
  res.send('Hello');
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = bodyparser , user;