const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), "yyyy-MM-dd HH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logName),
      logItem + "\n"
    );
  } catch (err) {
    console.error(err);
  }
};

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  logEvents(`${req.method}\t ${req.headers.origin}\t ${req.url}`, "reqlog.txt");
  next(); // to pass control to the next middleware/handler
};

module.exports = { logEvents, logger };

//console.log(format(new Date(), "yyyy-MM-dd HH:mm:ss"));

//generates a unique identifier each time it's called
//console.log(uuid());
//to run this file, use the command 'npm start' or 'npm run dev' for auto-restart on changes

//npm init -y creates a package.json file with default values
//package.json keeps track of project dependencies and scripts
