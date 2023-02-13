const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    lastName:{
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    age:{
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('users', userSchema);