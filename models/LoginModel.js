const { Schema, model } = require('mongoose');

// Define the schema for a User
const ItemsSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// Export the model using CommonJS syntax
module.exports = model('login', ItemsSchema);
