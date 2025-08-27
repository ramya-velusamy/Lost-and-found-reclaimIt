// const express = require('express');
// const router = express.Router();
// const FoundItem = require('../models/FoundItem');
// const auth = require('../middleware/auth');

// // Get all found items
// router.get('/', async (req, res) => {
//   try {
//     const { category, location, search } = req.query;
//     let query = {};
    
//     if (category) query.category = category;
//     if (location) query.locationFound = { $regex: location, $options: 'i' };
//     if (search) {
//       query.$or = [
//         { title: { $regex: search, $options: 'i' } },
//         { description: { $regex: search, $options: 'i' } }
//       ];
//     }
    
//     const foundItems = await FoundItem.find(query)
//       .populate('userId', 'name email')
//       .populate('claimedBy', 'name email')
//       .sort({ createdAt: -1 });
    
//     res.json(foundItems);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get single found item
// router.get('/:id', async (req, res) => {
//   try {
//     const foundItem = await FoundItem.findById(req.params.id)
//       .populate('userId', 'name email phone')
//       .populate('claimedBy', 'name email');
    
//     if (!foundItem) {
//       return res.status(404).json({ message: 'Found item not found' });
//     }
    
//     res.json(foundItem);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Create new found item
// router.post('/', auth, async (req, res) => {
//   try {
//     const foundItem = new FoundItem({
//       ...req.body,
//       userId: req.user._id
//     });
    
//     await foundItem.save();
//     await foundItem.populate('userId', 'name email');
    
//     res.status(201).json(foundItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Update found item
// router.put('/:id', auth, async (req, res) => {
//   try {
//     const foundItem = await FoundItem.findOneAndUpdate(
//       { _id: req.params.id, userId: req.user._id },
//       req.body,
//       { new: true }
//     ).populate('userId', 'name email');
    
//     if (!foundItem) {
//       return res.status(404).json({ message: 'Found item not found or unauthorized' });
//     }
    
//     res.json(foundItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Mark as claimed
// router.patch('/:id/claim', auth, async (req, res) => {
//   try {
//     const foundItem = await FoundItem.findByIdAndUpdate(
//       req.params.id,
//       { 
//         status: 'Claimed',
//         claimedBy: req.user._id 
//       },
//       { new: true }
//     );
    
//     if (!foundItem) {
//       return res.status(404).json({ message: 'Found item not found' });
//     }
    
//     res.json(foundItem);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Delete found item
// router.delete('/:id', auth, async (req, res) => {
//   try {
//     const foundItem = await FoundItem.findOneAndDelete({
//       _id: req.params.id,
//       userId: req.user._id
//     });
    
//     if (!foundItem) {
//       return res.status(404).json({ message: 'Found item not found or unauthorized' });
//     }
    
//     res.json({ message: 'Found item deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const FoundItem = require('../models/FoundItem');

// Get all found items
router.get('/', async (req, res) => {
  try {
    const foundItems = await FoundItem.find().sort({ createdAt: -1 });
    res.json(foundItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new found item (❌ removed auth for now)
router.post('/', async (req, res) => {
  try {
    const foundItem = new FoundItem(req.body);
    await foundItem.save();
    res.status(201).json(foundItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

