const express = require("express");
const router = express.Router();
const path = require("path");

router.get(["/", "/index", "/index.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "subdir", "index.html"));
});

router.get(["/test", "/test.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "subdir", "test.html"));
});

//this line exports the router object, which can then be imported in server.js and used as middleware
//the base path for this router is set in server.js when it is used as middleware
//e.g. app.use('/subdir', require('./routes/subdir'))
module.exports = router;
