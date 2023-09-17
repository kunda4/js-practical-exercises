/**
 Promise.any()
The Promise.any() static method takes an iterable of promises as 
input and returns a single Promise. This returned promise fulfills when 
any of the input's promises fulfills, with this first fulfillment value. 
It rejects when all of the input's promises reject (including when an empty 
iterable is passed), with an AggregateError containing an array of rejection reasons.

 */

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"
