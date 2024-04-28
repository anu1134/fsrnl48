const fruits = ["banana", "apple", "grapes"];
const vegetables = ["potatoes", "onions"];
const numbers = [ 234, 1, 9, 4, 23];

numbers.sort(); // changes the original array

fruits.sort();

fruits.reverse();

console.log(fruits)

// [ 1 , 4, 9, 23 , 234]

//console.log(fruits.concat(vegetables, numbers));

console.log(numbers);

console.log(typeof(fruits));

console.log(fruits[2]);

console.log(fruits.length);

fruits[3] = "oranges";

let newArray = fruits.toString();

let joined = fruits.join("-");

console.log(joined);

const value = fruits.pop();

console.log(value);

console.log(fruits);

const fruitsArray = fruits.push("watermelon");

console.log(fruitsArray);

const element = fruits.shift();

console.log(element);

const response = fruits.unshift("mango");

console.log(response);
console.log(fruits);

delete(fruits[1]);

console.log(fruits);

// [ 1 , 2, 3, 4, 5]

numbers.splice(1, 2, 16, 17);

console.log(numbers);

console.log(numbers.slice(2, 4));

numbers.reverse();

console.log(numbers);

Array.prototype.myMap = function () {
    console.log("My function");
}

numbers.myMap();






