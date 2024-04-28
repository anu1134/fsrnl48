// returns first element of the array which satisfies condition

const arr = [ 3 , 5, -6, 7, 8, -9];

// find any negative number

const negative = arr.find(num => num < 0);

console.log(negative);

const negativeIndex = arr.findIndex(num => num < 0);

console.log(negativeIndex);

