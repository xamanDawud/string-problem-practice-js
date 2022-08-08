/*
    fibo [3] = fibo[2] + fibo[1]
    fibo [4] = fibo[3] + fibo [2]
    fibo [50] = fibo [49] + fibo [48]
*/

let fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);