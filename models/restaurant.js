const mongoose = require('mongoose');

// Define the schema for a Restaurant
const RestaurantSchema = new mongoose.Schema({
    name: {
       " type": "String",
        "required": "true",
    },
    user_id: {
       " type": "mongoose.Schema.Types.ObjectId",
        "ref": "User",
        "required": "true",
    },
    location: {
       " type": "String",
        "required": "true",
    },
    contact_info: {
        "type": "String",
        "required": "true",
    },
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', RestaurantSchema);
