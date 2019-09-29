const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const file = require("./nemad.json");

router.get("/", (req, res) => {
  res.header("Content-Type", "application/json");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization"
  );

  res.send(JSON.stringify(file));
});

module.exports = router;
