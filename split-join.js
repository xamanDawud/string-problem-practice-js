let lyrics =
    "Sada Sada kala Kala , Rong Jomese Sada Kala , Tumi Bondu Kala Pakhi Ami Jeno Ki";
let parts = lyrics.split(" ");
let sentense = lyrics.split(",");
let character = lyrics.split("");
console.log(character);

//

const alsoCut = lyrics.substring(14, 20);
console.log(alsoCut);

//

let cleanDast = "      Hello xaman Mama! whats up";
let clean = cleanDast.trim();
console.log(clean);
//

let poem = [
    "Badam Badam Mamam Kacha Badam",
    "amar kache naiko mama baja badam ",
    "amar kache ache sudu baja badam",
];

let addin = poem.join("--");
console.log(addin);