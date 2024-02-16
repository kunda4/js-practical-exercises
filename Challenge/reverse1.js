// reverse word without using the reverse method

function reversedWord(word){
    let reversed = ''

    for(let i= word.length-1; i>=0; i--){
         reversed += word[i]
    }
    return reversed
}

console.log(reversedWord('agnes'))