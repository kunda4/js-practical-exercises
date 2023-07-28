//How would you remove duplicate members from an array without Set?
function removeduplicate(arr) {
  //
  let arr1 = [];
  arr.forEach((element) => {
    if (!arr1.includes(element)) {
      arr1.push(element);
    }
  });
  return arr1;
}

console.log(removeduplicate([1, 2, 3, 2, 3, 2, 4, 5]));

array.forEach((element) => {
  if (!arr.includes(element)) {
    arr.push(element);
  }
});
