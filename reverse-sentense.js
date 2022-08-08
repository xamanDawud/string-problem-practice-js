function reversedWord(text) {
    let preText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        preText += text[i];
    }
    return preText;
}

console.log(reversedWord("In the name of "));