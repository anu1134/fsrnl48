const arr = [ 1, 2, 3, 4, 5];

for(let i =0 ;i < arr.length; i++) {
    console.log(arr[i]);
}

for (val of arr) {
    console.log(val);
}

// Higher Order Functions

/** Functions which take another function as parameter */
// callback function  ---- function which is passed as a parameter

arr.forEach((val) => {
    console.log(val);
});