import { Schema, model } from 'mongoose';
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
export default model('login', ItemsSchema);