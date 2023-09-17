setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));

// The output is

/**
promise
timeout
Here's why this output is produced:

Promise.resolve().then(() => console.log("promise"));: 
This code creates a Promise using Promise.resolve() and attaches a .then() 
callback to it. The .then() callback contains the console.log("promise") statement. 
When this code is executed, the Promise is immediately resolved, but its .then() 
callback is scheduled to run in the next microtask queue.

setTimeout(() => console.log("timeout"), 0);: This code schedules a setTimeout() 
callback to run with a delay of 0 milliseconds. However, even though the delay is set to 0, 
the setTimeout() callback is placed in the macrotask queue, which means it will be executed 
after the current task queue (including microtasks) has been processed.
 */
