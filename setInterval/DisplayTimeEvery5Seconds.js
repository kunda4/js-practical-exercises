function displayTime() {
  let timeDate = new Date();
  let time = timeDate.toLocaleTimeString();
  console.log(time);
}

setInterval(displayTime, 1000);
