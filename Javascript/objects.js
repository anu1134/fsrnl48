// Template Literals --- ES6

// const firstName = "Anshika"

// "My name is " +  firstName, 

const userDetails = {
    firstName: "John",
    lastName: "Sena",
    printName: function(hobby, age) {
        console.log(`${this.firstName} ${this.lastName}`);
        console.log(`His hobby is ${hobby}`);
        console.log(`His age is ${age}`);
    }
}

console.log(userDetails.toString());

userDetails.printName("playing badminton", 78);

const user2 = {
    firstName: "Anurag",
    lastName: "Chowdhary",
}

// Function borrowing

userDetails.printName.call(user2, "cooking", 56);
userDetails.printName.apply(user2, ["cooking", 56]);

const printFunc = userDetails.printName.bind(user2);
printFunc("cooking", 56);



