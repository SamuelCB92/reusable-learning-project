const os = require("os");
const path = require("path");
const math = require("./math");

console.log(math.add(5, 3)); // Outputs: 8
console.log(math.subtract(10, 4)); // Outputs: 6

//alternatively, we can import destructured functions directly
//const { add, subtract } = require("./math");
//console.log(add(2, 2)); // Outputs: 4
