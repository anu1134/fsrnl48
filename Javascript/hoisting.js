// Hoisting in Javascript
let a = 10;
console.log(a);



var square = (num) => {
    console.log("square of two numbers");
    return num * num;
} ; 

const answer = square(20);
console.log(answer);



// Function declaration
// function square(num) {
//     return num * num;
// }

// const result = square(a);
// console.log(result);

// Variables declared with var are global scoped variables
// Variables declared with let & const are local scoped variables
// Function declarataions are also hoisted
// Call any function even before declaraing them
// Function Expressions are not hoisted

// EcmaScript --- standard on which javascript is based

// Arrow Functions --- 2015 ES6 features


// Function Expression

let age = 20;

age = 40;

let hobby;

hobby = "listening music";

const school = "";

