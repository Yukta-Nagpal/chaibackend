require("dotenv").config();
const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send("Hello World")
})

app.get('/youtube', (req, res) => {
    res.send("Chai aur Code")
})

app.listen(process.env.PORT, (req, res) => {
    console.log(`Example port listening at ${process.env.PORT}`)
})
