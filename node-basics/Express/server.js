const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;

app.get(["/", "/index", "/index.html"], (req, res) => {
  // Serving a static HTML file
  res.sendFile(path.join(__dirname, "views", "index.html"));
  // Alternative way to send file
  //res.sendFile("./views/index.html", { root: path.join(__dirname) });
});

app.get(["/new-page", "/new-page.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page", (req, res) => {
  res.redirect("/new-page");
});

//route handlers are executed in order, so the 404 handler should be last

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
