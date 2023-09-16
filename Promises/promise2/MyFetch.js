async function MyFunction() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
}

MyFunction().then((res) => {
  console.log(res);
});
