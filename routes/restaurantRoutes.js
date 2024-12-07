const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Add a new restaurant
router.post('/add', restaurantController.RestaurantPost);

// Get all restaurants
router.get('/', restaurantController.GetRestaurantData);

// Update a restaurant
router.put('/:id', restaurantController.UpdateRestaurant);

// Delete a restaurant
router.delete('/:id', restaurantController.DeleteRestaurant);

module.exports = router;
