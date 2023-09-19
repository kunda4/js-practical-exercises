function fetchDataWithTimeout(url, timeout) {
  const controller = new AbortController();
  const { signal } = controller;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  return fetch(url, { signal })
    .then((response) => {
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        throw new Error("Request timed out.");
      } else {
        throw error;
      }
    });
}
// Usage example:
const url = "https://jsonplaceholder.typicode.com/posts/1";
const timeoutMs = 1000;
//const timeoutMs = 50;
console.log("Timeout milliseconds: " + timeoutMs);

fetchDataWithTimeout(url, timeoutMs)
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

// const p1 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("This took too long");
//     }, 2000);
//   });
// };

// const p2 = () => {
//   return new Promise((resove) => {
//     setTimeout(() => {
//       resove("done");
//     }, 1000);
//   });
// };

// // Promise.race([p1(), p2()]).then((res) => console.log(res));
// const res = async () => {
//   let value = await Promise.any([p1(), p2()]);
//   console.log(value);
// };
// res();
