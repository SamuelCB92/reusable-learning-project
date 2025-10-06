const express = require("express");
const router = express.Router();
const path = require("path");

// (request, response, next) => {}, where request and response are objects, and next is a function to call the next middleware in line
router.get(["/", "/index", "/index.html"], (req, res) => {
  // Serving a static HTML file
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
  // Alternative way to send file
  //res.sendFile("./views/index.html", { root: path.join(__dirname) });
});

router.get(["/new-page", "/new-page.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});

router.get("/old-page", (req, res) => {
  res.redirect("/new-page");
});

module.exports = router;
