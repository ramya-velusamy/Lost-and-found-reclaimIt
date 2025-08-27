const mongoose = require("mongoose");

const shopItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String }, // URL or file path
  category: { type: String },
  stock: { type: Number, default: 1 }
}, { timestamps: true });

module.exports = mongoose.model("ShopItem", shopItemSchema);
