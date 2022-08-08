// Finding max number in raw way

let xaman = 234;
let mohona = 1678;
let sabiqun = 2000;

// if (xaman > mohona && xaman > sabiqun) {
//     console.log("Xaman is the winner of this running competition");
// } else if (mohona > xaman && mohona > sabiqun) {
//     console.log("Mohona is the winner of this running competition");
// } else {
//     console.log("Sabiqun is the winner of this competition");
// }

// Finding max number in fancy way

let findMax = Math.max(xaman, mohona, sabiqun);
console.log(findMax);