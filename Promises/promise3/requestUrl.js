function requestUrl(url) {
  return new Promise((reject, resolve) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

requestUrl("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    console.log("Response data:", data);
  })
  .catch((error) => {
    console.log("Error", error);
  });
