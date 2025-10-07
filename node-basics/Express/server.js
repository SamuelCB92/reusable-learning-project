const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");

// Custom middleware to log request details
app.use(logger);
app.use(credentials); // Handle options credentials check - before CORS!

// Cross Origin Resource Sharing, which means allowing requests from different origins(domains/ports/protocols)
// By default, web browsers block such requests for security reasons (CORS policy)
// If you have a frontend server running on a different port/domain, you'll need this to allow it to access your API
// In production, you might want to restrict this to specific origins instead of allowing all with cors()
app.use(cors(corsOptions)); // to allow cross-origin requests, e.g. from a frontend server

// built-in middleware to serve static files
app.use(express.urlencoded({ extended: false })); // to handle form data
app.use(express.json()); // to handle json data
//since this is above the route handlers, it will be applied to all routes and search for static files in the public folder first
//this means if a file is found in the public folder, it will be served and the route handlers will be skipped
//it also means that files in the public folder can be accessed directly via their path, e.g. /images/logo.png

//middleware for cookies
app.use(cookieParser()); // to parse cookies from the request headers

app.use(express.static(path.join(__dirname, "/public"))); // to serve static files from the public folder, e.g. images, css files, js files
app.use("/subdir", express.static(path.join(__dirname, "/public"))); // to serve static files from the public folder for routes starting with /subdir

//routes
app.use("/", require("./routes/root")); // to use the root router for routes starting with /
app.use("/register", require("./routes/register")); // to use the register router for routes starting with /register
app.use("/auth", require("./routes/auth")); // to use the auth router for routes starting with /auth
app.use("/refresh", require("./routes/refresh")); // to use the refresh router for routes starting with /refresh
app.use("/logout", require("./routes/logout")); // to use the logout router for routes starting with /logout
app.use("/subdir", require("./routes/subdir")); // to use the subdir router for routes starting with /subdir

app.use(verifyJWT); // to use the verifyJWT middleware for all routes below this line, protecting them
app.use("/employees", require("./routes/api/employees")); // to use the employees router for routes starting with /employees

/* // (request, response, next) => {}, where request and response are objects, and next is a function to call the next middleware in line
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
}); */
//chaining route handlers
/* app.get(
  "/chain",
  (req, res, next) => {
    console.log("First handler");
    res.write("Chained response part 1. "); // This will not end the response, but res.send would(making res.send useless on the next handler)
    next(); // Call the next middleware/handler
  },
  (req, res) => {
    console.log("Second handler"); // This will run after the first handler
    res.end("Chained response part 2."); // This will end the response and send it to the client. res.send would not work here because res.write was used earlier, meaning the response is already in progress
  }
); */

//route handlers are executed in order, so the 404 handler should be last
// This will handle all other routes not defined above
app.use((req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "Not found" });
  } else {
    res.type("txt").send("404 Not found");
  }
});

// Custom error handling middleware, must be placed after all other app.use() and routes calls, because it will catch errors from them
app.use(errorHandler);

/* // Error handling middleware, with 4 arguments, must be defined after all other app.use() and routes because it catches errors from them
// If you call next(err) in any route/middleware, it will skip to this error handler
//err.stack is a built-in property that provides a stack trace of the error, useful for debugging
app.use((function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
})); */

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
