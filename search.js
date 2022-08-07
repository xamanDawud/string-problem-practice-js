const song =
    "Sada Sada kala Kala , Rong Jomese Sada Kala , Tumi Bondu Kala Pakhi Ami Jeno Ki";

// Find the word in song string exist

// let find = song.includes("bondu");
// console.log(find);#

let hasThisWord = song.toLowerCase().includes("Bondu".toLowerCase());
console.log(hasThisWord);

// Know the song string index Number by indexOf()

let findeIndex = song.indexOf("Bondu");
console.log(findeIndex);

// find the letter or word by the start/end of song string

let hasStart = song.startsWith("Sada");
console.log(hasStart);
let hasEnd = song.endsWith("ki");
console.log(hasEnd)