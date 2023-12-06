const { Schema, model } = require("mongoose")

const userScheme = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, authentication: {
        password: {
            type: String,
            required: true,
            select: false
        }, salt: {
            type: String,
            select: false
        },
        sessionToken: {
            type: String,
            select: false
        }
    }
})


export const UserModel = model("User", userScheme)


const getUsers = () => UserModel.find()