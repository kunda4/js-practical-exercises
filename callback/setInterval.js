let count = 0; // Initialize a counter to keep track of iterations

const intervalId = setInterval(() => {
  console.log("Interval is running...");
  count++;

  // Check if you want to stop the interval after a certain number of iterations
  if (count === 5) {
    clearInterval(intervalId); // Stop the interval
    console.log("Interval stopped after 5 iterations.");
  }
}, 1000); // Execute the interval function every 1 second (1000 milliseconds)
