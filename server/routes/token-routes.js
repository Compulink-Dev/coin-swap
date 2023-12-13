const express = require('express')
const router = express.Router()
const user = require('../models/users')

router.post('/login', (req, res) => {
    let { name, surname, email, password, confirm_password, phone_number, country_code, service_provider } = req.body
    name = name.trim()
    surname = surname.trim()
    email.trim()
    password = password.trim()
    phone_number = phone_number
    country_code = country_code
    service_provider = service_provider.trim()

    if (name == "" || surname == "" || email == "" || password == "" || phone_number == "" || country_code == "" || service_provider == "") {
        res.json({
            status: "Failed",
            message: "Empty input fields"
        })
    } else if (!/^[a-zA-Z]*$/.test(name)) {
        res.json({
            status: "Failed",
            message: "Invalid name entered"
        })
    }
    else if (!/^[a-zA-Z]*$/.test(surname)) {
        res.json({
            status: "Failed",
            message: "Invalid surname entered"
        })
    }
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.json({
            status: "Failed",
            message: "Invalid email entered"
        })
    }
    else if (password.length < 8) {
        res.json({
            status: "Failed",
            message: "Password should be more than 8 characters"
        })
    }
    else if (password != confirm_password) {
        res.json({
            status: "Failed",
            message: "Password does not match"
        })
    }
    else {
        user.find({ email }).then(result => {

        }).catch
    }
})


router.post('/register', (req, res) => {

})

module.exports = router