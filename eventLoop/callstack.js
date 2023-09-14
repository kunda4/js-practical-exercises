// function multiply(a, b) {
//   return a * b;
// }

// function square(n) {
//   return multiply(n, n);
// }

// function printSquare(n) {
//   var squared = square(n);
//   console.log(squared);
// }

// printSquare(4);

// console.log("First");

// setTimeout(function () {
//   console.log("Second");
// }, 0);

// new Promise(function (res) {
//   res("Third");
// }).then(console.log);

// console.log("Fourth");
// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise

//   .then(function () {
//     console.log("Success 1");
//   })

//   .then(function () {
//     console.log("Success 2");
//   })

//   .then(function () {
//     console.log("Success 3");
//   })

//   .catch(function () {
//     console.log("Error 1");
//   })

//   .then(function () {
//     console.log("Success 4");
//   });
// function miniMaxSum(arr) {
//   // Write your code here

//   return [
//     BigInt(
//       arr
//         .sort((a, b) => a - b)
//         .slice(0, arr.length - 1)
//         .reduce((acc, curr) => acc + curr, 0)
//     ),
//     BigInt(
//       arr
//         .sort((a, b) => a - b)
//         .slice(1, arr.length)
//         .reduce((acc, curr) => acc + curr, 0)
//     ),
//   ].join(" ");
// }
// console.log(miniMaxSum([1, 2, 3, 4, 5]));

// function solEquaStr(n) {
//   const result = [];
//   console.log(Math.sqrt(13));

//   for (let x = 0; x <= n; x++) {
//     const ySquared = (x * x - n) / 4;

//     if (Number.isInteger(ySquared) && ySquared >= 0) {
//       const y = Math.sqrt(ySquared);
//       if (Number.isInteger(y)) {
//         result.push([y, x]);
//       }
//     }
//   }

//   result.sort((a, b) => b - a);

//   return result;
// }

// console.log(result);

// Output the solutions
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// setTimeout(() => {
//   console.log("Ansyc and wait");
// }, 2000);
// console.log(5);
// console.log(6);

function solequa(n) {
  let result = [];

  for (let x = 1; x <= Math.sqrt(n) + 1; x++) {
    const ySquare = (x * x - n) / 4;

    if (Number.isInteger(ySquare) && ySquare >= 0) {
      const y = Math.sqrt(ySquare);

      if (Number.isInteger(y)) {
        const pair = [x, y];
        if (!result.some(([a, b]) => a === pair[0] && b === pair[1])) {
          result.push(pair);
        }
      }
    }
  }

  result = result.sort((a, b) => b[0] - a[0]); // Sort by x values in descending order
  return result;
}
console.log(solequa(4503));
