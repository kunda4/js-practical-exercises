// Flattern an array of arrays
// with using the flat() method
let arr = [[0,1], [2,3], [4,5]]

let myNewArr = arr.flat()
console.log(myNewArr)

// without using the flat() method

let newArr = arr.reduce((prev, curr)=> prev.concat(curr), [])

console.log(newArr)