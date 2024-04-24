function groupThreeWords(sentence) {
    const words = sentence.split(' ');
    
    let groupedWords = [];
    
    for (let i = 0; i < words.length; i += 3) {
        let group = words.slice(i, i + 3).join(' ');
        groupedWords.push(group);
    }
    
    return groupedWords.join('@');
}

const inputSentence = "This is a sample sentence for testing the function";
const result = groupThreeWords(inputSentence);
console.log(result); 