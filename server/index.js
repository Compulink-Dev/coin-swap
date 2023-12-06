const express = require("express");
require('dotenv').config()
require('./db')


const PORT = process.env.PORT
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use((req, res, next) => {
    req.on('data', (chunk) => {
        req.body = JSON.parse(chunk)
    })
    next()
})



app.get("/", (req, res) => {
    console.log("Hello you");
    res.send("Hello there")
})


app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body)
})


app.listen(3010, () => {
    console.log("Connected at port " + PORT);
})