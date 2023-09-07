// ACCOUNTANT count As and and Cs then give the output

function printNum(words) {
  let charct = ["A", "C"];
  let newArr = [];

  let splitArr = words.toString().split("");
  for (let i of splitArr) {
    if (charct.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr.length;
}

console.log(printNum(["ACCOUNTANT"]));

//new way by using filter

function printNum(words) {
  let charct = ["A", "C"];
  return words
    .toString()
    .split("")
    .filter((element) => charct.includes(element)).length;
}
console.log(printNum(["ACCOUNTANT"]));

//Other way

function countLetters(word, letters) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (word[i] === letters[j]) {
        count++;
      }
    }
  }
  return count;
}
console.log(countLetters("ACCOUNTANT", "AC"));
