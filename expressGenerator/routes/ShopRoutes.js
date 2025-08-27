const express = require("express");
const router = express.Router();
const ShopItem = require("../models/ShopItem");

// ✅ Get all shop items
router.get("/", async (req, res) => {
  try {
    const items = await ShopItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch shop items" });
  }
});

// ✅ Add a new item
router.post("/", async (req, res) => {
  try {
    const { name, description, price, image, category, stock } = req.body;
    const newItem = new ShopItem({ name, description, price, image, category, stock });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to add shop item" });
  }
});

// ✅ Update an item
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await ShopItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to update shop item" });
  }
});

// ✅ Delete an item
router.delete("/:id", async (req, res) => {
  try {
    await ShopItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete shop item" });
  }
});

module.exports = router;
