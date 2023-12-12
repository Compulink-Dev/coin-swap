const { Schema, model, default: mongoose } = require("mongoose")

const userScheme = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    confirm_password: {
        type: String,
        required: true,
        select: false
    },
    phone_number: {
        type: Number,
        required: true,
    },
    country_code: {
        type: Number,
    },
    service_provider: {
        type: Number,

    }
})


const userMOdel = mongoose.model('User', userScheme)


module.exports = UserModel
