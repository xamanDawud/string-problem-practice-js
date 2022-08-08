// First finding max and min number using if else condition

function findingMax(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

let getMax = findingMax(23, 56, 65);
console.log(getMax);

function findingMin(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}

let getMin = findingMin(23, 56, 65);
console.log(getMin);

// Finding max and min value with using Math.max and Math.min

function isMax(x, y, z) {
    let findMax = Math.max(x, y, z);
    return findMax;
}

console.log(isMax(23, 535, 6434));

function isMin(x, y, z) {
    let findMin = Math.min(x, y, z);
    return findMin;
}

console.log(isMin(23, 535, 6434));