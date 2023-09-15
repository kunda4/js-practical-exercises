async function MyFunction() {
  let url = "https://jsonplaceholder.typicode.com/todos";
  let response = await fetch(url);
  return response.json();
}

MyFunction().then((res) => {
  console.log(res);
});
