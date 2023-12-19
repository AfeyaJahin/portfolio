const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

// GET all education entries
router.get('/', educationController.getAllEducation);

// POST a new education entry
router.post('/', educationController.addEducation);

// PUT to update an education entry
router.put('/:id', educationController.updateEducation);

// DELETE an education entry
router.delete('/:id', educationController.deleteEducation);

module.exports = router;
