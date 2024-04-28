// reduce an array to a single value

const arr = [ 3 , 5, 6, 8, 9];

let sum = 0;
for(let i = 0 ; i < arr.length; i++) {
    sum =  sum + arr[i];
}
console.log(sum);

const result = arr.reduce((sum, curr) => {
    return sum + curr; 
}, 0);

console.log(result);

const result1 = arr.reduce((mul, curr) => {
    return mul * curr; 
}, 1);

console.log(result1);