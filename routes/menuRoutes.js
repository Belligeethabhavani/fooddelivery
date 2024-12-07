const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// Add a new menu item
router.post('/add', menuController.MenuPost);

// Get all menu items for a restaurant
router.get('/:restaurantId', menuController.GetMenuData);

// Update a menu item
router.put('/:id', menuController.UpdateMenu);

// Delete a menu item
router.delete('/:id', menuController.DeleteMenu);

module.exports = router;
