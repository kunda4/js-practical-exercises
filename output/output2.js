function myFunction(platform) {
  console.log("Hi, Welcome to " + platform);
}

console.log("Before the setImmediate call");
let timerID = setImmediate(myFunction, "Educative");
console.log("After the setImmediate call");
for (let i = 0; i < 10; i++) {
  console.log("Iteration of loop: " + i);
}

// The output
/**
Before the setImmediate call
After the setImmediate call
Iteration of loop: 0
Iteration of loop: 1
Iteration of loop: 2
Iteration of loop: 3
Iteration of loop: 4
Iteration of loop: 5
Iteration of loop: 6
Iteration of loop: 7
Iteration of loop: 8
Iteration of loop: 9
Hi, Welcome to Educative
 */
