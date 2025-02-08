const express = require("express");
const db = require("./db");
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send(`Server is running at https://localhost:${port}/`)
})

app.get("/books", (req,res) => {

    // Send SQL Command to database
    // Add callback function to show error and results from db.js
    db.query("SELECT *  FROM books", (error, results) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.json(results);
    });

})

app.listen(port, () => {
    console.log(`HELLO at https://localhost:${port}/`)
})

