const str = 'hallo'
const mychar = str.split('')

const charCount = mychar.reduce((obj,char) => {
    if(obj[char] === undefined){
        obj[char] = 1
        return obj
    }else{
        obj[char]++
        return obj
    }
},{})

const result = Object.entries(charCount).map(([curr, char]) => curr +char).join('')

console.log(result)

// the output will be
//h1a1l2o1
