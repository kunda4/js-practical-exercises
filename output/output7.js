async function outerAsyncFunction() {
  console.log("Outer Function Start");

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating an asynchronous operation

  console.log("Outer Function End");

  async function innerAsyncFunction() {
    console.log("Inner Function Start");

    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulating another asynchronous operation

    console.log("Inner Function End");
  }

  await innerAsyncFunction(); // Call the inner async function

  console.log("Back in Outer Function");
}

outerAsyncFunction();
