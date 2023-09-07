// Practical question
// implement a function called combineArrays that can take one or more arrays of the same length as arguments and return an array of all the provided arrays combined.

// The arrays should be combined by going through all the array passed in the function in the same order they were passed in, by taking all the first elements from each array, followed by second elements from each array, third element from each array and so on until all elements are combined in the same array (check examples for clarification)

// You are assured that the function will always take arrays of the same length, and If only one array is passed, it should be returned unchanged

// Example
// combineArrays(['Rwanda','Burundi']) // returns ['Rwanda', 'Burundi']
// combineArrays(['Rwanda', 'Burundi'], ['Kigali', 'Bujumbura']) // returns ['Rwanda', 'Kigali', 'Burundi', 'Bujumbura']
// combineArrays([1, 2, 3], [55 , 56, 57], ['a', 'b', 'c']) // returns [1, 55, 'a', 2, 56, 'b', 3, 57, 'c']

function combineArrays(...arr) {
  if (arr.length == 1) return arr[0];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr.map((ele) => ele[i]));
  }

  return newArr.flat();
}

console.log(combineArrays([1, 2, 3], [55, 56, 57], ["a", "b", "c"]));
