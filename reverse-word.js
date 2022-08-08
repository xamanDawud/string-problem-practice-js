function reverseWord(text) {
    let wordsBreak = text.split(" ");
    let preText = [];
    for (let i = wordsBreak.length - 1; i >= 0; i--) {
        preText.push(wordsBreak[i]);
    }
    return preText;
}

console.log(reverseWord("Hello Xaman Dawud"));