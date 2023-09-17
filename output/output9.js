function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise

  .then(function (data) {
    console.log(data);

    return job(false);
  })

  .catch(function (error) {
    console.log(error);

    return "Error caught";
  })

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .catch(function (error) {
    console.log(error);
  });

// The Output

/**
success
error
Error caught 

The output of the provided code will be as follows:

Here's the explanation of why this output occurs:

1. The `job(true)` function is called, creating a Promise that immediately resolves with the value "success" because the `state` parameter is `true`.

2. The `.then()` method is called on the `promise`, and it attaches a success callback function. This success callback logs "success" to the console.

3. Inside the success callback, another `job(false)` function is called, creating a new Promise that immediately rejects with the value "error" because the `state` parameter is `false`.

4. Since an error occurred in the previous Promise (rejected), the `.catch()` method is invoked, attaching an error callback that logs "error" to the console.

5. The error callback returns the string "Error caught," which effectively resolves this Promise with the value "Error caught."

6. Another `.then()` method is called, attaching a success callback that logs "Error caught" to the console.

7. Inside the success callback of the last `.then()` method, a `job(true)` function is called, creating a new Promise that resolves with the value "success."

8. Since there are no further `.catch()` methods in the chain, the final success callback is executed, logging "success" to the console.

So, in summary, the output reflects the sequence of Promise resolutions and rejections in the chain, with appropriate callbacks handling the outcomes. When an error occurs and is caught, it allows the chain to continue with the next success callback, demonstrating how Promise chaining and error handling work in JavaScript.
   */
