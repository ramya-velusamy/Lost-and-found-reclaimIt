const mongoose = require('mongoose');

const lostItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true, enum: ['Other', 'Electronics', 'Documents' /*, ... add other categories here */] },
  location: { type: String, required: true },
  dateLost: { type: Date, required: true },
  contactInfo: {
    email: String,    // only required if you want! If required, add: required: true
    phone: String
  },
  images: [String],
  reward: Number,
  status: { type: String, enum: ['Lost', 'Found', 'Claimed'], default: 'Lost' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('lostitems', lostItemSchema);
