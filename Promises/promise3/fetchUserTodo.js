// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/todos",
// ];

// const fetchUserTodos = async (endpoints) => {
//   const result = [];
//   for (const url of endpoints) {
//     result.push(fetch(url));
//   }
//   const [res1, res2] = await Promise.all(result);
//   const users = await res1.json();
//   const todos = await res2.json();

//   users.map((el) => (el.todos = todos.filter((todo) => todo.userId === el.id)));
//   return users;
// };
// fetchUserTodos(urls).then((res) => console.log(res));

async function fetchBoth(urls) {
  const result = [];
  for (const url of urls) {
    result.push(fetch(url));
  }
  const [res1, res2] = await Promise.all(result);
  const users = res1.json();
  const todos = res2.json();

  users.map((el) => (el.todos = todos.filter((todo) => todo.userId === el.id)));
  return users;
}
fetchBoth(urls).then((val) => console.log(val));
