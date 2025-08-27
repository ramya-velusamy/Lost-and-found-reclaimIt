const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Who is reporting
  email: { type: String, required: true }, // Contact info
  message: { type: String, required: true }, // The actual report
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);
