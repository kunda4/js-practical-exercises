//How would you find the greatest common divisor of two numbers?

function greatestCommon(num1, num2) {
  let result = 1;
  for (let i = 1; num1 >= i && num2 >= i; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      result = i;
    }
  }
  return result;
}

console.log(greatestCommon(120, 20));
