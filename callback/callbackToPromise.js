function callbackFunction(arg1, arg2, callback) {
  setTimeout(() => {
    const result = arg1 + arg2;
    if (result % 2 !== 0) {
      callback(null, result);
    } else {
      callback(new Error("Result is not Odd"), null);
    }
  }, 1000);
}

function promiseFunction(arg1, arg2) {
  return new Promise((resolve, reject) => {
    callbackFunction(arg1, arg2, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

promiseFunction(2, 4)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error.message);
  });
