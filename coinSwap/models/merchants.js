const { Schema, model, default: mongoose } = require("mongoose")

const merchantScheme = new Schema({
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
        type: string,
        required: true,
    },
    merchant_type: {
        type: string,
    },
    country_code: {
        type: string,
    },
    access_token: {
        type: string,
    },
    refresh_token: {
        type: string,
    }
})


const merchantSchemeModel = mongoose.model('Merchant', merchantScheme)


module.exports = merchantSchemeModel
