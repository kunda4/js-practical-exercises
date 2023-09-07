function removeDuplicate(arr) {
  let newArr = [];
  for (let i of arr) {
    if (!newArr.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));
