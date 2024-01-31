// app.js
const math = require('./math');

// Using functions from the math module
const result1 = math.add(5, 3);
const result2 = math.subtract(10, 4);
const result3 = math.multiply(2, 6);
const result4 = math.divide(8, 2);

console.log(`Addition: ${result1}`);
console.log(`Subtraction: ${result2}`);
console.log(`Multiplication: ${result3}`);
console.log(`Division: ${result4}`);
