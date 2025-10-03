const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "yyyy-MM-dd HH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventlog.txt"),
      logItem + "\n"
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = logEvents;

//console.log(format(new Date(), "yyyy-MM-dd HH:mm:ss"));

//generates a unique identifier each time it's called
//console.log(uuid());
//to run this file, use the command 'npm start' or 'npm run dev' for auto-restart on changes

//npm init -y creates a package.json file with default values
//package.json keeps track of project dependencies and scripts
