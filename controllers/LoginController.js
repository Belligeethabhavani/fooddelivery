const Item = require('../models/LoginModel').default;
// Create a new user
exports.CreateItem = async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Get all users
exports.GetItems = async (req, res) => {
    try {
        const item = await Item.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};