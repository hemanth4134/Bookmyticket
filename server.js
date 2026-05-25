const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("YOUR_MONGODB_URL")
.then(() => console.log("MongoDB Connected"));

app.get("/", (req,res)=>{
  res.send("Movie Booking API Running");
});

app.listen(5000, ()=>{
  console.log("Server Running on Port 5000");
});
