//Count Total number of zeros from 1 up to n?

function countZeros(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    // if (i % 10 == 0) {
    //   count++;
    arr.push(i);
  }
  console.log(arr);

  const result = arr
    .toString()
    .split("")
    .filter((arr) => arr == 0).length;

  return result;
}

console.log(countZeros(100));
