function repeatEvery(func1, interval) {
  setInterval(func1, interval);
}

const interval = 2000;

function func1() {
  console.log("return me");
}

repeatEvery(func1, interval);
