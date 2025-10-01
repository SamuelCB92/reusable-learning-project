const { set } = require("react-hook-form");
const logEvents = require("./logEvents");
// EventEmitter is a built-in class that allows us to create, emit, and listen to custom events
const EventEmitter = require("events");

// Create a custom class that extends the EventEmitter class, allowing us to create our own event emitter
class MyEmitter extends EventEmitter {}

// Initialize an object of the custom class
const myEmitter = new MyEmitter();

// Add a listener for the 'log' event, which will call the logEvents function whenever the event is emitted
myEmitter.on("log", (msg) => logEvents(msg));

// Emit the 'log' event with a message, triggering the listener and logging the event
setTimeout(() => {
  myEmitter.emit("log", "Log event emitted!");
}, 2000);

// To run this file, use the command 'npm start' or 'npm run dev' for auto-restart on changes
// Ensure you have installed the dependencies using 'npm install'
