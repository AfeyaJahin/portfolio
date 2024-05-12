const express = require('express');
const router = express.Router();
const employmentController = require('../controllers/employmentController');


// GET all employment entries
router.get('/', employmentController.getAllEmployment);
// GET a specific employment entry by ID
router.get('/:id', employmentController.getEmploymentById);

// POST a new employment entry
router.post('/', employmentController.createEmployment);
// PUT to update an employment entry
router.put('/:id', employmentController.updateEmployment);
// DELETE an employment entry
router.delete('/:id', employmentController.deleteEmployment);
module.exports = router;