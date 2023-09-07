function reversePlace() {
  let string = "I am the good boy";

  let reversedString = string
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

  console.log(reversedString);
}
reversePlace();
