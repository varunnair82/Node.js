// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : 'Cannot divide by zero');

// Exporting functions to make them accessible in other modules
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
