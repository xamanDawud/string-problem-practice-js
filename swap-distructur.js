let num1 = 10;
let num2 = 20;
console.log(num1, num2);

// num1 = num2;
// num2 = num1;
// console.log(num1, num2);  // 20 20

// System number one
// let temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(num1, num2); // 20 10

// Another system with destructuring
[num1, num2] = [num2, num1];
console.log(num1, num2);