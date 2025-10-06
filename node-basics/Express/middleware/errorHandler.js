const { logEvents } = require("./logEvents");

// Error handling middleware
// This should be placed after all other app.use() and routes calls, because it will catch errors from them
// If you call next(err) in any route/middleware, it will skip to this error handler
// err.stack is a built-in property that provides a stack trace of the error, useful for debugging
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  logEvents(`${err.name}: ${err.message}`, "errlog.txt");
  res.status(500).send("Something broke!");
};

module.exports = errorHandler;
