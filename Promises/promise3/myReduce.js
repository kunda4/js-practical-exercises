Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const test = (arr) => {
  return arr.customReduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};
console.log(test([2, 4, 7, 12, 9]));
