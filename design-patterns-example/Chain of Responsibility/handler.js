// Handler interface
class Handler {
    constructor(successor = null) {
      this.successor = successor;
    }
  
    handleRequest(request) {
      if (this.successor) {
        this.successor.handleRequest(request);
      }
    }
}
  
// Concrete Handlers
class ConcreteHandler1 extends Handler {
    handleRequest(request) {
      if (request === 'Handler1') {
        console.log('ConcreteHandler1 handling the request');
      } else {
        super.handleRequest(request);
      }
    }
}
  
class ConcreteHandler2 extends Handler {
    handleRequest(request) {
      if (request === 'Handler2') {
        console.log('ConcreteHandler2 handling the request');
      } else {
        super.handleRequest(request);
      }
    }
}

class ConcreteHandler3 extends Handler {
    handleRequest(request) {
      if (request === 'Handler3') {
        console.log('ConcreteHandler3 handling the request');
      } else {
        super.handleRequest(request);
      }
    }
}

module.exports = {
  Handler,
  ConcreteHandler1,
  ConcreteHandler2,
  ConcreteHandler3
};