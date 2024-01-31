// Observer interface
class Observer {
    update(message) {
      // To be implemented by concrete observers
    }
  }
  
  // Concrete Observer 1
  class ConcreteObserver1 extends Observer {
    update(message) {
      console.log(`Observer 1 received message: ${message}`);
    }
  }
  
  // Concrete Observer 2
  class ConcreteObserver2 extends Observer {
    update(message) {
      console.log(`Observer 2 received message: ${message}`);
    }
  }
  
  // Subject (observable) class
  class Subject {
    constructor() {
      this.observers = [];
    }
  
    // Add an observer to the list
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    // Remove an observer from the list
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    // Notify all observers of a state change
    notifyObservers(message) {
      this.observers.forEach(observer => observer.update(message));
    }
  }
  
  // Usage of the Observer Pattern
  const subject = new Subject();
  
  const observer1 = new ConcreteObserver1();
  const observer2 = new ConcreteObserver2();
  
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  // Notify observers of a state change
  subject.notifyObservers('State has been updated!');
  