// const numbers = [1, 2, 3, 4]

// const sum = myReduce(numbers, (acc , curr) => {
// 	return acc + curr
// }, 0)

// console.log(sum[1, 2, 3, 4])

function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue === undefined ? arr[0] : initialValue;

  for (let i = initialValue === undefined ? 1 : 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }

  return accumulator;
}

//   const numbers = [1, 2, 3, 4];

//   const sum = myReduce(numbers, (acc, curr) => {
//     return acc + curr;
//   }, 0);

//   console.log(sum); // Output: 10
