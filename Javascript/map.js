// does not modify original array
// transforms the contents of array
// returns the new array

// print square of each element of the array

const arr = [4 , 6, 7, 8, 9];

for(let i = 0; i< arr.length; i++) {
    console.log(arr[i] * arr[i]);
}

const squaredArray = arr.map(val => val * val);

console.log(squaredArray);