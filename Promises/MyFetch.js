async function MyFunction() {
  let Mydata = document.getElementById("data");

  let url = "https://jsonplaceholder.typicode.com/todos";
  let response = await fetch(url);
  return response.json();
}

MyFunction().then((res) => {
  console.log(res);
});
