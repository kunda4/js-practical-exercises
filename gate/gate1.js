/**
Write a function insertCharAfterWords that takes a sentence and a special character as arguments. The function should return a new sentence with the special character inserted after every 3 words.
insertCharAfterWords("The quick brown fox jumps over the lazy dog", "*")
// "The quick brown* fox jumps over* the lazy dog*"

insertCharAfterWords("I love JavaScript programming", "#") 
// "I love JavaScript# programming"

insertCharAfterWords("Exploration of the cosmos is fascinating", "!")
// "Exploration of the! cosmos is fascinating!"
 */

function insertCharAfterWords(str,char){
    arr = str.split(" ")
    for(let i=0; i<arr.length; i+3){
        
            arr[i] += char
        
    }

    return arr.join(' ')
}

console.log(insertCharAfterWords("Exploration of the cosmos is fascinating", "!"))