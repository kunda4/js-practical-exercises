const baz = () => console.log("baz");
const foo = () => console.log("foo");
const zoo = () => console.log("zoo");
const start = () => {
  console.log("start");
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve("bar");
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};
start();

// output
// start
// foo
// bar
// zoo
// baz
/* This code will first call start(), then call foo() in process.
nextTick queue. After that, it will handle promises microtask queue, 
which prints bar and adds zoo() in process.nextTick queue at the same time. 
Then it will call zoo() which has just been added. 
In the end, the baz() in macrotask queue is called.*/
