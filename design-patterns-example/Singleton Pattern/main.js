// main.js
const Singleton = require('./singleton');

// Get the singleton instance
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

// Both instances refer to the same object
console.log(instance1 === instance2); // Output: true

// Use the singleton instance
instance1.showMessage(); // Output: Hello from the Singleton instance!
instance2.showMessage(); // Output: Hello from the Singleton instance!
