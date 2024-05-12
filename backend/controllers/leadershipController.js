const leadership = require('../models/leadership'); // Adjust this path to where your model is stored

const leadershipController = {
  // Get all leadership records
  getAllLeadership: async (req, res) => {
    try {
      const leadershipRecords = await leadership.find();
      res.json(leadershipRecords);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching leadership records', error: err.message });
    }
  },

  // Get a single leadership record by ID
  getLeadershipById: async (req, res) => {
    try {
      const leadershipRecord = await leadership.findById(req.params.id);
      if (!leadershipRecord) return res.status(404).json({ message: 'Leadership record not found' });
      res.json(leadershipRecord);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching leadership record', error: err.message });
    }
  },

  // Create a new leadership record
  createLeadership: async (req, res) => {
    const { position, organization, startDate, endDate, description, skills } = req.body;

    // Validation: Ensure required fields are provided
    if (!position || !organization || !startDate || !description) {
      return res.status(400).json({ message: 'Missing required fields: position, organization, startDate, or description' });
    }

    const leadershipRecord = new leadership({ position, organization, startDate, endDate, description, skills });

    try {
      const newLeadershipRecord = await leadershipRecord.save();
      res.status(201).json(newLeadershipRecord);
    } catch (err) {
      res.status(400).json({ message: 'Error creating leadership record', error: err.message });
    }
  },

  // Update a leadership record by ID
  updateLeadership: async (req, res) => {
    try {
      const updatedLeadershipRecord = await leadership.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedLeadershipRecord) return res.status(404).json({ message: 'Leadership record not found' });
      res.json(updatedLeadershipRecord);
    } catch (err) {
      res.status(400).json({ message: 'Error updating leadership record', error: err.message });
    }
  },

  // Delete a leadership record by ID
  deleteLeadership: async (req, res) => {
    try {
      const leadershipRecord = await leadership.findByIdAndDelete(req.params.id);
      if (!leadershipRecord) return res.status(404).json({ message: 'Leadership record not found' });
      res.json({ message: 'Leadership record deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting leadership record', error: err.message });
    }
  }
};

module.exports = leadershipController;
