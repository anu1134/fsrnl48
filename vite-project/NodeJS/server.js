import express from "express";

const app = express();

app.listen("5100", () => {
    console.log("server is running on port 5100");
});

// CRUD Operations
// Create
// Read
// Update
// Delete

// HTTP Methods
// POST
// GET
// PUT
// DELETE

const users = [
    {
        firstName: "Anshika",
        age: 67
    },
    {
        firstName: "Ankit",
        age: 45
    },
    {
        firstName: "John",
        age: 12
    },
    {
        firstName: "Alice",
        age: 23
    }
];

app.get("/", (req, res) => {
    res.send("Learning NodeJS");
})

app.get("/users", (req, res) => {
    res.send(users);
})
