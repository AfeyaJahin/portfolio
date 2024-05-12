const express = require('express');
const leadershipController = require('../controllers/leadershipController');

const router = express.Router();

// GET all leaders
router.get('/', leadershipController.getAllLeadership);

// GET a specific leader by ID
router.get('/:id', leadershipController.getLeadershipById);

// POST a new leader
router.post('/', leadershipController.createLeadership);

// PUT/update a leader by ID
router.put('/:id', leadershipController.updateLeadership);

// DELETE a leader by ID
router.delete('/:id', leadershipController.deleteLeadership);

module.exports = router;