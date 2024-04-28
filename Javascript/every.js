// every ---- checks whether every element of array satisfies conditon

let arr = [ 3, -4, 6, 7, 8, 9];

// check whether all numbers are positive or not

const isPositive = arr.every(num => num > 0);

console.log(isPositive);

// some --- even if one element of the array satisfies the condition

const isPositive1 = arr.some(num => num > 0);

console.log(isPositive1);