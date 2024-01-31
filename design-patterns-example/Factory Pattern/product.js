// Product classes
class Car {
    constructor() {
      this.type = 'Car';
    }
  
    start() {
      console.log('Car is starting...');
    }
}
  
class Bicycle {
    constructor() {
        this.type = 'Bicycle';
    }

    start() {
        console.log('Bicycle is starting...');
    }
}
  
// Factory class
class VehicleFactory {
    createVehicle(type) {
      switch (type) {
        case 'car':
          return new Car();
        case 'bicycle':
          return new Bicycle();
        default:
          throw new Error('Invalid vehicle type');
      }
    }
}

module.exports = VehicleFactory;