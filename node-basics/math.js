// This is a custom module
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

//arrow functions also work
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

// Export functions so other files can use them
module.exports = {
  add,
  subtract,
};

// Alternatively, we could export them individually
// module.exports.add = (a, b) => a + b;
// module.exports.subtract = (a, b) => a - b;
// or
// exports.add = add;
// exports.subtract = subtract;
