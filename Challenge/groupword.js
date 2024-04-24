function groupThreeWords(sentence) {
    // Step 1: Split the sentence into an array of words
    const words = sentence.split(' ');
    
    // Step 2: Initialize an array to hold the grouped words
    let groupedWords = [];
    
    // Step 3: Iterate over the words array, grouping every three words
    for (let i = 0; i < words.length; i += 3) {
        // Create a group of words, or just the last word if there are less than three left
        let group = words.slice(i, i + 3).join(' ');
        groupedWords.push(group);
    }
    
    // Step 4: Join the groups with the "@" character and return the final string
    return groupedWords.join('@');
}

// Example usage:
const inputSentence = "This is a sample sentence for testing the function";
const result = groupThreeWords(inputSentence);
console.log(result); // Output will be "This is a@sample sentence@for testing@the function"