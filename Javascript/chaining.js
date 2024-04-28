const users = [
    {
        firstName: "John",
        lastName: "Sena",
        age: 78
    },
    {
        firstName: "Marie",
        lastName: "Singh",
        age: 45
    },
    {
        firstName: "Ankit",
        lastName: "Shroff",
        age: 34
    },
    {
        firstName: "Ritu",
        lastName: "Singh",
        age: 23
    }
];

//["John", "Marie", "Ankit"]

// Print firstNames of all users whose age is greater than 30

// map and filter

// const filteredUsers = users.filter(user => user.age > 30);

// console.log(filteredUsers);

// const firstNames = filteredUsers.map(user => user.firstName);
// console.log(firstNames);

const firstNames = users
    .filter(user => user.age > 30)
    .map(user => user.firstName);

console.log(firstNames);