const mongoose = require("mongoose")
const contactUsSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    subject:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required: true
    }
})
const ContactUs = mongoose.model("ContactUs",contactUsSchema)
module.exports = ContactUs