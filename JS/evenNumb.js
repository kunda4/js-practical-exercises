const evenNum = (arr) => {
  const newArr = [];
  for (const i of arr) {
    if (i % 2 == 0) {
      newArr.push(i);
    }
  }
  return newArr.sort((a, b) => a - b);
};
console.log(evenNum([1, 20, 10, 11, 12, 3, 5, 6, 8, 9, 10]));

//new way
// const evenNuum = (arr) => {
//   return arr.filter((i) => i % 2 == 0).sort((a, b) => a - b);
// };
