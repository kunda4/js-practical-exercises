function myArray(...arr) {
  if (arr.length < 4) {
    return "not enough elements";
  }
  let removedword = arr.splice(2, 1);
  return arr.map((ele) => `${ele} ${removedword}`);
}

console.log(myArray("Agnes", "Anitha", "Anna", "Aline", "Alicia"));
