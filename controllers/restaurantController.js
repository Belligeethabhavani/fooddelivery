const Restaurant = require("../models/restaurant");

exports.RestaurantPost = async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.GetRestaurantData = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(201).json(restaurants);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.UpdateRestaurant = async (req, res) => {
  try {
    const id = req.params.id;
    const updateDetails = req.body;
    const result = await Restaurant.updateOne({ _id: id }, { $set: updateDetails });
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.DeleteRestaurant = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Restaurant.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
