const express = require("express");
require('dotenv').config()
require('./db')


const customerRouter = require('../routes/customer-routes')
const merchantRouter = require('../routes/merchant-routes')
const tokenRouter = require('../routes/token-routes')

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

app.use('/customer', customerRouter)
app.use('/merchant', merchantRouter)
app.use('/token', tokenRouter)



app.get("/", (req, res) => {
    console.log("Hello");
    res.send("Hello there")
})


app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body)
})


app.listen(3010, () => {
    console.log("Connected at port " + PORT);
})