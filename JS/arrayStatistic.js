function arrayStatistics(arr) {
  let result = {};
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  result.sum = sum;
  result.av = sum / arr.length;
  result.max = Math.max(...arr);
  result.min = Math.min(...arr);
  return result;
}

console.log(arrayStatistics([1, 2, 3, 5, 4, 7, 8]));
