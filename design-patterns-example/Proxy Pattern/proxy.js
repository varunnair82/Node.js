// Subject interface
class RealSubject {
    request() {
      console.log('RealSubject: Handling request');
    }
  }
  
  // Proxy class
  class ProxySubject {
    constructor() {
      this.realSubject = null;
    }
  
    request() {
      // Create the RealSubject only when needed
      if (!this.realSubject) {
        this.realSubject = new RealSubject();
      }
  
      // Additional logic can be added here before or after forwarding the request to the real subject
      console.log('ProxySubject: Logging the request');
  
      // Forward the request to the real subject
      this.realSubject.request();
    }
  }


  module.export = ProxySubject;
