function longestSrt(sentence) {
    const words = sentence.split(' ');

    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word; 
        }
    }

    return longestWord; 
}

const sntnc = "this is a test: sisjsiojfi";
console.log(longestSrt(sntnc));