// This is a custom module
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export functions so other files can use them
module.exports = {
  add,
  subtract,
};
