let arr = [23, 345, 243, 6324, 234, 48090];
let firsrIndex = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= firsrIndex) {
        firsrIndex = arr[i];
    }
}

console.log(firsrIndex);