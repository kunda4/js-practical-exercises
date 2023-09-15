/**
 The code snippet below is synchronous. It calls callback1 one time and callback2 three times. You must modify this code to make it asynchronous with the following rules:

callback1 must be called only one time, after 2 seconds.
callback2 must be called three times with an interval of 1 second.
 */
// first way
function job(callback1, callback2) {
  setTimeout(callback1, 2000);

  setTimeout(callback2, 1000);
  setTimeout(callback2, 2000);
  setTimeout(callback2, 3000);
}

module.exports = job;

//Second way

function job(callback1, callback2) {
  setTimeout(callback1, 2000);
  let count = 1;
  function myInterval() {
    if (count <= 3) {
      callback2();
      count++;
    }
  }
  setInterval(myInterval, 1000);
}
module.exports = job;
