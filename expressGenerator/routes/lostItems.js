// const express = require('express');
// const router = express.Router();
// const LostItem = require('../models/LostItem');
// const auth = require('../middleware/auth');

// // Get all lost items
// router.get('/', async (req, res) => {
//   try {
//     const { category, location, search } = req.query;
//     let query = {};
    
//     if (category) query.category = category;
//     if (location) query.location = { $regex: location, $options: 'i' };
//     if (search) {
//       query.$or = [
//         { title: { $regex: search, $options: 'i' } },
//         { description: { $regex: search, $options: 'i' } }
//       ];
//     }
    
//     const lostItems = await LostItem.find(query)
//       .populate('userId', 'name email')
//       .sort({ createdAt: -1 });
    
//     res.json(lostItems);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get single lost item
// router.get('/:id', async (req, res) => {
//   try {
//     const lostItem = await LostItem.findById(req.params.id)
//       .populate('userId', 'name email phone');
    
//     if (!lostItem) {
//       return res.status(404).json({ message: 'Lost item not found' });
//     }
    
//     res.json(lostItem);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Create new lost item
// router.post('/', auth, async (req, res) => {
//   try {
//     const lostItem = new LostItem({
//       ...req.body,
//       userId: req.user._id
//     });
    
//     await lostItem.save();
//     await lostItem.populate('userId', 'name email');
    
//     res.status(201).json(lostItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Update lost item
// router.put('/:id', auth, async (req, res) => {
//   try {
//     const lostItem = await LostItem.findOneAndUpdate(
//       { _id: req.params.id, userId: req.user._id },
//       req.body,
//       { new: true }
//     ).populate('userId', 'name email');
    
//     if (!lostItem) {
//       return res.status(404).json({ message: 'Lost item not found or unauthorized' });
//     }
    
//     res.json(lostItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete lost item
// router.delete('/:id', auth, async (req, res) => {
//   try {
//     const lostItem = await LostItem.findOneAndDelete({
//       _id: req.params.id,
//       userId: req.user._id
//     });
    
//     if (!lostItem) {
//       return res.status(404).json({ message: 'Lost item not found or unauthorized' });
//     }
    
//     res.json({ message: 'Lost item deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Mark as found
// router.patch('/:id/found', auth, async (req, res) => {
//   try {
//     const lostItem = await LostItem.findOneAndUpdate(
//       { _id: req.params.id, userId: req.user._id },
//       { status: 'Found' },
//       { new: true }
//     );
    
//     if (!lostItem) {
//       return res.status(404).json({ message: 'Lost item not found or unauthorized' });
//     }
    
//     res.json(lostItem);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const LostItem = require('../models/LostItem');

// Get all lost items
router.get('/', async (req, res) => {
  try {
    const { category, location, search } = req.query;
    let query = {};

    if (category) query.category = category;
    if (location) query.location = { $regex: location, $options: 'i' };
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const lostItems = await LostItem.find(query).sort({ createdAt: -1 });
    res.json(lostItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new lost item (❌ removed auth for now)
router.post('/', async (req, res) => {
  try {
    const lostItem = new LostItem(req.body);
    await lostItem.save();
    res.status(201).json(lostItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

