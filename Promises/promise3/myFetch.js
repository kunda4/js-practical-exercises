function myFetch(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject("error", req.response);
      }
    };
    req.send();
  });
}
myFetch("https://dummy.restapiexample.com/api/v1/employees");
