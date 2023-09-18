function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Asynchronous Opearation1");
      resolve();
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Asynchronous Operation2");
      resolve();
    }, 1500);
  });
}

function asyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Asynchronous Operation3");
      resolve();
    });
  });
}
async function performOperation() {
  try {
    await asyncOperation1();
    await asyncOperation2();
    await asyncOperation3();
    console.log("All Operation is completed");
  } catch (error) {
    console.log("Error", error.message);
  }
}
performOperation();
