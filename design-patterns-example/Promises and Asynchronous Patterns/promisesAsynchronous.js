// Function that return a Promise to simulate an asynchronous operation.
const asyncOperation = (shouldSucceed) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           if(shouldSucceed){
            resolve('Operation successful');
           } else {
            reject(new Error('Operation failed'));
           }
        }, 2000); // Simulating a delay of 2 seconds.
    });
};


// Using the Promise
asyncOperation(false)
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error.message);
})
.finally(() => {
    console.log('Async Operation completed');
});