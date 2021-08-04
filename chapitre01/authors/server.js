var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

const express = require("express");
const app = express();

const port = 8000;


//exercice01
app.get("/", (req, res) => {
    res.send("Authors API ")
});


//exercice02

app.get("/authors/:number", (req, res) => {
    for (let i = 1; i <= authors.length; i++) {
        if (req.params.number == i) {
            res.send(`${authors[i-1].name}, ${authors[i-1].nationality}`);
        }
    }
});

//exercice03

app.get("/authors/:number/books", (req, res) => {
    for (let i = 1; i <= authors.length; i++) {
        if (req.params.number == i) {
            res.send(`${authors[i-1].books}`);
        }
    }
});


//exercice04

app.get("/json/authors/:id", (req, res) => {
    let name = authors[req.params.id-1].name;
    let nationality = authors[req.params.id-1].nationality;
    for (let i = 1; i <= authors.length; i++) {
        if (req.params.id == i) {
            res.json({ name : name , nationality : nationality})
           
        }
    }
});
app.get("/json/authors/:id/books", (req, res) => {
    let books = authors[req.params.id-1].books;    
    for (let i = 1; i <= authors.length; i++) {
        if (req.params.id == i) {
            res.json({ books : `[${books}]` })
           
        }
    }
});

//Bonus

app.listen(port, () => {
    console.log("server start");
});