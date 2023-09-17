function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise

  .then(function () {
    console.log("Success 1");
  })

  .then(function () {
    console.log("Success 2");
  })

  .then(function () {
    console.log("Success 3");
  })

  .catch(function () {
    console.log("Error 1");
  })

  .then(function () {
    console.log("Success 4");
  });

// the Output
/**
 Error 1
Success 4
The output of the provided code will be as follows:

Here's the explanation of why this output occurs:

1. The `job()` function returns a Promise, and within its constructor, `reject()` is called. This immediately rejects the Promise.

2. The `job()` Promise is assigned to the variable `promise`.

3. The `.then()` method is called on the `promise`, and it attaches a success callback function. However, since the `job()` Promise was rejected, this success callback will not be executed.

4. The subsequent `.then()` methods are chained. In a Promise chain, if any of the previous Promises were rejected and no error handler (`.catch()`) was invoked, the subsequent `.then()` callbacks are still executed.

5. The `.catch()` method is called, attaching an error callback. Since the `job()` Promise was rejected, this error callback is executed, which logs "Error 1" to the console.

6. After the error callback, another `.then()` method is called with a success callback. This success callback is executed because error handlers (`.catch()`) do not prevent the execution of subsequent success callbacks. It logs "Success 4" to the console.

So, in summary, even though the `job()` Promise was initially rejected, the error is caught by the `.catch()` method, allowing the subsequent success callback to be executed. This demonstrates how error handling in Promise chains works in JavaScript.
 */
