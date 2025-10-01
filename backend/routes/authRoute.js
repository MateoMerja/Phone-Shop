const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// POST /api/register
router.post('/register', async (req, res) => {
  try {
    const { first_name, password } = req.body;

    // Krijo hash për password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Ruaj user
    const newUser = await User.create({ first_name, password: hashedPassword });

    res.status(201).json({ message: 'User registered', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

module.exports = router;