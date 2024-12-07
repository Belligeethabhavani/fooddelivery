const express = require('express');
const router = express.Router();

// Example endpoint: Register a new user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Example logic (replace with actual DB logic)
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

module.exports = router;



/*const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/userpost", UserController.UserPost);
router.get("/usergetall", UserController.GetUserData);
router.put("/update/:id", UserController.UpdateUser);
router.delete("/delete/:id", UserController.DeleteUser);

module.exports = router;
*/