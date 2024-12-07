import { Schema, model } from 'mongoose';
// Define the schema for a User
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    User_Id: {
        type: String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
}, { timestamps: true });
export default model('User', UserSchema);