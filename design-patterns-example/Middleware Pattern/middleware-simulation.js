
// Middleware functions
const midddleware1 = (req, res, next) => {
    console.log('Middleware 1 - Before handling request');
    // You can modify the request or response objects here.
    next(); // Call the next middleware in the sequence.
    console.log('Middleware 1 - After handling request');
};


const middleware2 = (req, res, next) => {
    console.log('Middleware 2 - Before handling request');
    // You can modify the request or response objects here.
    next(); // Call the next middleware in the sequence.
    console.log('Middleware 2 - After handling request');
};


const middleware3 = (req,res,next) => {
    console.log('Middleware 3 - Handling request');
    res.send('Hello from Middleware 3!');
};

// Express-like application wiht middleware
const app = (req, res) => {
    console.log('request received');
    // This middleware simulates the execution of middleware in a web framework.
    midddleware1(req,res, () => {
        middleware2(req, res, () => {
            middleware3(req,res);
        });
    });
};


// Simulate a request to the application.
app({}, {}); // Output will show the execution flow through middleware functions.