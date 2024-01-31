const express = require('express');

// Middleware functions
const middleware1 = (req, res, next) => {
  console.log('Middleware 1 - Before handling request');
  // You can modify the request or response objects here
  next(); // Call the next middleware in the sequence
  console.log('Middleware 1 - After handling request');
};

const middleware2 = (req, res, next) => {
  console.log('Middleware 2 - Before handling request');
  // You can perform additional tasks here
  next(); // Call the next middleware in the sequence
  console.log('Middleware 2 - After handling request');
};

const middleware3 = (req, res, next) => {
  console.log('Middleware 3 - Handling request');
  res.send('Hello from Middleware 3!');
};

// Express application
const app = express();

// Use middleware in the application
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
