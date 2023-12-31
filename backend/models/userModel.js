const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    contactNo: {
        type: Number,
        require: true,
    },
})

module.exports = mongoose.model("User",userSchema);