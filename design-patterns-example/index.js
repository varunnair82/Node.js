// main.js

// main.js

const singleton = require('./creational-patterns/singleton');

const loggerInstance1 = new singleton.getInstance().result;
const loggerInstance2 = new singleton.getInstance().result;

// Checking if both instances point to the same object
if(loggerInstance1 === loggerInstance2){
  console.log("Both instances are same.")
} else {
  console.log("Both instances are differnet.")
}

// Checking the creation time of the logger instances
console.log('Logger Instance 1 created at:', loggerInstance1.createdAt);
console.log('Logger Instance 2 created at:', loggerInstance2.createdAt);
