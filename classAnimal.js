//extract characters from word
let names = "kareeeeeeraeeaaeey";
let obj = {};
for (let char of names) {
  if (char in obj) {
    obj[char] += 1;
  } else {
    obj[char] = 1;
  }
}
console.log(obj);
//////

//string compressor

function check(str) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i + 1]) {
      arr.push(`${str[i]}${count}`);
      count = 0;
    }
  }
  return arr;
}
console.log(check("AAeeyhhHHaaEEA"));

//////

class Animal {
  constructor(sound = "Mooo") {
    this.sound = sound;
  }
  speak() {
    console.log(this.sound);
  }
  eat() {
    console.log("it eats");
  }
}
class Dog extends Animal {
  constructor(sound = "Woof") {
    super(sound);
  }
}
class Cat extends Animal {
  constructor(sound = "meow") {
    super(sound);
  }
}
let cow = new Animal();
let cat = new Cat();
let dog = new Dog();
cat.speak();
