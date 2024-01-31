const {ConcreteHandler1} = require("./handler");
const {ConcreteHandler2} = require("./handler");
const {ConcreteHandler3} = require("./handler");

// Client code
const handlerChain = new ConcreteHandler1(new ConcreteHandler2(new ConcreteHandler3()));

// Requests
handlerChain.handleRequest('Handler2'); // Output: ConcreteHandler2 handling the request
handlerChain.handleRequest('Handler1'); // Output: ConcreteHandler1 handling the request
handlerChain.handleRequest('Handler3'); // Output: ConcreteHandler3 handling the request
handlerChain.handleRequest('Handler4'); // No handler can handle the request