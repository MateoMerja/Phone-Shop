const mongoose = require("mongoose")
const contactUsSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    email:{
        type:String
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }
})
const ContactUs = mongoose.model("ContactUs",contactUsSchema)
module.exports = ContactUs