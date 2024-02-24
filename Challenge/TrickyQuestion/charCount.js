const str = 'Pneumonoultramicroscopicsilicovolcanoconiosis'

const myStr = str.split('')

const charCount = myStr.reduce((obj, char) => {
    if(obj[char] === undefined){
        obj[char] = 1
        return obj
    } else{
        obj[char]++
        return obj
    }
},{})

const maxValue = Math.max(...Object.values(charCount));
// Find characters with the maximum value
const maxChars = Object.keys(charCount).filter(char => charCount[char] === maxValue);
console.log(`Characters with the maximum value is ${maxChars}:${maxValue}`);