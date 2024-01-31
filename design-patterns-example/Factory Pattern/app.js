const VehicleFactory = require("./product");

// Usage of the Factory Pattern
const factory = new VehicleFactory();

const car = factory.createVehicle('car');
const bicycle = factory.createVehicle('bicycle');

car.start(); // Output: Car is starting...
bicycle.start(); //Output: Bicycle is starting...