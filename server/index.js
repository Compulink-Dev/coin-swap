const express = require("express");
const path = require('path')
require('dotenv').config()
require('./db')




// const userRouter = require('./routes/user-route')

const PORT = process.env.PORT || 3010
const app = express()

// custom middleware logger 
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next()
})



app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// servers static files 
app.use(express.static(path.join(__dirname, 'src')))


app.use((req, res, next) => {
    req.on('data', (chunk) => {
        req.body = JSON.parse(chunk)
    })
    next()
})

// app.use('/user', userRouter)



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'Home.html'))
})


app.get("/customer/login", (req, res) => {
    console.log("Hello");
    res.send("Hello customer")
})

app.get("/customer/register", (req, res) => {
    console.log("Hello");
    res.send("Hello customer reg")
})


app.get("/merchant/login", (req, res) => {
    console.log("Hello");
    res.send("Hello merchant")
})

app.get("/merchant/register", (req, res) => {
    console.log("Hello");
    res.send("Hello merchant reg")
})



app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body)
})


app.listen(3010, () => {
    console.log("Connected at port " + PORT);
})