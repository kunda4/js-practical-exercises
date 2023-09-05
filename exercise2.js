// Here's what I did for each part of the exercise:

// A) I've added a default value of 3 for the numberOfMeasurements parameter in the calculateAverage function. This allows Angela to omit the parameter when she wants to perform 3 measurements.

// B) I've uncommented the test cases in testCalculateAverage.

// C) I've replaced the for loop with a for...of loop, eliminating the need for the i variable.

// D) I've used the spread operator (...) to pass the elements of the arrayWithNumbers directly to the calculateSum function.

// E) I've created a new calculateSum function that accepts any number of parameters using the rest parameter syntax (...numbers). This function calculates the sum of all the numbers passed to it. I've then replaced the old calculateSumThree and calculateSumFour functions with the new calculateSum function within the calculateAverage function.

// These changes should make the code more concise and utilize ES6 features effectively.

function calculateSum(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function calculateAverage(arrayWithNumbers, numberOfMeasurements = 3) {
  if (!Array.isArray(arrayWithNumbers)) {
    return null;
  }

  if (numberOfMeasurements !== 3 && numberOfMeasurements !== 4) {
    return null;
  }

  if (arrayWithNumbers.length !== numberOfMeasurements) {
    return null;
  }

  for (const num of arrayWithNumbers) {
    if (typeof num !== "number") {
      return null;
    }
  }

  return calculateSum(...arrayWithNumbers) / numberOfMeasurements;
}

function testCalculateAverage() {
  if (calculateAverage("banana", 3) !== null) {
    return false;
  }

  if (calculateAverage([1, -1, 6], "banana") !== null) {
    return false;
  }

  if (calculateAverage(["banana", 3, 1], 3) !== null) {
    return false;
  }

  if (calculateAverage([1, 2, 3, 1], 3) !== null) {
    return false;
  }

  if (calculateAverage([3, 1], 3) !== null) {
    return false;
  }

  if (calculateAverage([1, -1, 6], 3) !== 2) {
    return false;
  }

  if (calculateAverage([1, -1, 6, 6], 4) !== 3) {
    return false;
  }

  if (calculateAverage([1, -1, 6]) !== 2) {
    return false;
  }

  return true;
}

if (testCalculateAverage() === false) {
  console.log("The calculateAverage function is wrong.");
} else {
  console.log("The calculateAverage function works fine!");
}
