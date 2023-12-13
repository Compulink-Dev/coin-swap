const { Schema, model, default: mongoose } = require("mongoose")

const tokenSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
})


const tokenSchemaModel = mongoose.model('Token', tokenSchema)


module.exports = tokenSchemaModel
