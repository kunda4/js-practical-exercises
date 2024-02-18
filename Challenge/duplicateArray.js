// remove duplicate in Array

function removeDuplicate(arr){

    const myNewArr = [...new Set(arr)]
    return myNewArr
}
const numb = [1,2,2,4,5,3,5,4,6,7,8]
let name = ['Agnes', 'Anne', 'Simbi', 'Anne', 'Marie', 'Simbi']
// console.log(removeDuplicate(numb))
console.log(removeDuplicate(name))