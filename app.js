const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello mj");
});

module.exports = app;