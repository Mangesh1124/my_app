const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello ci cd");
});

module.exports = app;