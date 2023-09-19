let num = 1;
function printNum() {
  if (num <= 10) {
    console.log(num);
    num++;
  }
  setTimeout(printNum, 1000);
}
printNum();
