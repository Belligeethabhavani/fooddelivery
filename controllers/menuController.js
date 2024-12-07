const Menu = require("../models/menu");

exports.MenuPost = async (req, res) => {
  try {
    const menuItem = new Menu(req.body);
    await menuItem.save();
    res.status(200).json(menuItem);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.GetMenuData = async (req, res) => {
  try {
    const menu = await Menu.find({ restaurant_id: req.params.restaurantId });
    res.status(201).json(menu);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.UpdateMenu = async (req, res) => {
  try {
    const id = req.params.id;
    const updateDetails = req.body;
    const result = await Menu.updateOne({ _id: id }, { $set: updateDetails });
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.DeleteMenu = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Menu.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.status(200).json({ message: "Menu item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
