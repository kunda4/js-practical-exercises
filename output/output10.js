function main() {
  return new Promise((resolve) => {
    console.log(3);
    resolve(4);
    console.log(5);
  });
}

async function f() {
  console.log(2);
  let r = await main();
  console.log(r);
  console.log(7);
}

console.log(1);
f();
console.log(6);

//The output

/**
1
2
3
5
6
4
7
 */
