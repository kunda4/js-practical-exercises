function filterNum(arr) {
  let newArr = [];
  let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i of arr) {
    // console.log(i);
    for (let w of numArr) {
      console.log(w);
      if (i.includes(w)) {
        newArr.push(w);
      }
    }
    return newArr.join("");
  }
}

console.log(filterNum(["the32", "pro2ed22"]));
