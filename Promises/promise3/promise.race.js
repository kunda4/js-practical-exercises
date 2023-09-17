/**
Promise.race()
The Promise.race() static method takes an iterable of promises 
as input and returns a single Promise. This returned promise settles 
with the eventual state of the first promise that settles.
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"
