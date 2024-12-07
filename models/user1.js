const mongoose = require('mongoose');
// Define the schema for a User
const UserSchema = new mongoose.Schema({
    studentname: {
        type: String,
        required: true,
    },
    studentemail: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });
module.exports = mongoose.model('User', UserSchema);