// function setup() {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => {
//       return response.json();
//     })
//     .then((json) => {
//       createP(json.word);
//       return fetch("https://jsonplaceholder.typicode.com/todos" + json.word);
//     })
//     .then((response) => {
//       return response.json();
//     })
//     .then((json) => {
//       createImg(json.data[0].images["fixed_height_small"].url);
//     })
//     .catch((err) => console.log(err));
// }



fetch('https://example.com/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));