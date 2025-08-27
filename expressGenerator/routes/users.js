const express = require('express');
const User = require('../models/user');
const nodemailer = require('nodemailer');
const router = express.Router();

const transport = nodemailer.createTransport({
    service: "gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: "9750ramya@gmail.com",
        password: "obzn hxdm tzxq wonf"
    }
});

// POST /users - Create new user (matches frontend)
router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user
        const user = new User({ email, password });
        await user.save();
        
        res.status(201).json({ message: "User created successfully", user });
    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({ message: "Server error" });
    }
});

// GET /users - Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// GET /users/:id - Get user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// PUT /users/:id - Update user
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// DELETE /users/:id - Delete user
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
