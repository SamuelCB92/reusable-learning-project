console.log("Hello from Node.js!");
console.log("Current directory:", __dirname);
console.log("Current file:", __filename);

const math = require("./math");

console.log("5 + 3 =", math.add(5, 3));
console.log("10 - 4 =", math.subtract(10, 4));
