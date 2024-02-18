// remove duplicate in Array

function removeDuplicate(arr){

    const myNewArr = [...new Set(arr)]
    return myNewArr
}
const numb = [1,2,2,4,5,3,5,4,6,7,8]
console.log(removeDuplicate(numb))

function removeDuplicate2(arr){
    const uniqueNum = arr.filter(element=> arr.indexOf(element) !== arr.lastIndexOf(element))
    return uniqueNum
}

const numbers = [1,2,2,4,5,3,5,4,6,7,8]
console.log(removeDuplicate(numbers))