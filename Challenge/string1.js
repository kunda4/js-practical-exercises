//convert the each first char to uppercase in this sentences's 
//words and return the sentence again

const str = 'welcome to my youtube channel to day hello little'

const newStr = str.split(' ').map(el=> el.charAt(0).toUpperCase().concat(el.slice(1).toLowerCase()) )

console.log(newStr.join(' '))