// singleton.js
class Singleton {
    constructor() {
      // Private variable to hold the instance
      this.instance = null;
    }
  
    // Method to get the singleton instance
    static getInstance() {
      if (!this.instance) {
        // If the instance doesn't exist, create a new one
        this.instance = new Singleton();
      }
  
      // Return the existing instance
      return this.instance;
    }
  
    // Other methods and properties can be added here
    showMessage() {
      console.log("Hello from the Singleton instance!");
    }
  }
  
  // Export the Singleton class
  module.exports = Singleton;
  