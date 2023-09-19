let count = 0;
let interval = setInterval(
  function () {
    count++;
    if (count === 5) {
      clearInterval(interval);
    }
    let timeDate = new Date();
    let time = timeDate.toLocaleTimeString();
    console.log(time);
  },

  1000
);
