/*const express = require('express');
const router = express.Router();

// Example endpoint: Fetch items
router.get('/items', async (req, res) => {
  try {
    // Example static data (replace with DB query)
    const items = [
      { id: 1, name: 'Pizza', price: 10 },
      { id: 2, name: 'Burger', price: 8 },
      { id: 3, name: 'Pasta', price: 12 },
    ];
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const itemController = require('../controllers/LoginController'); // Import the correct controller

console.log("in the router");

// Define routes for users
router.post('/login', itemController.CreateItem); // Use itemController
router.get('/login', itemController.GetItems);   // Use itemController

module.exports = router;
