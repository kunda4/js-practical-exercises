/**
Reverse in place
If you have a string like "I am the good boy". How can you generate 
"I ma eht doog yob"? Please note that the words are in place but reversed.
 */

function reverseInPlace(str){

    return str.split(" ").map((element)=> element.split("").reverse().join("")).join(" ");
    

}

console.log(reverseInPlace("I am the good boy"));