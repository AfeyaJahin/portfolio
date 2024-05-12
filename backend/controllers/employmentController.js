const Employment = require('../models/employment'); // Adjust the path to where your model is stored

const employmentController = {
  // Get all employment records
  getAllEmployment: async (req, res) => {
    try {
      const employmentRecords = await Employment.find();
      res.json(employmentRecords);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching employment records', error: err.message });
    }
  },

  // Get a single employment record by ID
  getEmploymentById: async (req, res) => {
    try {
      const employmentRecord = await Employment.findById(req.params.id);
      if (!employmentRecord) return res.status(404).json({ message: 'Employment record not found' });
      res.json(employmentRecord);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching employment record', error: err.message });
    }
  },

  // Create a new employment record
  createEmployment: async (req, res) => {
    const { company, position, startDate, endDate, location, description, technologies } = req.body;

    // Validation: Ensure required fields are provided
    if (!company || !position || !startDate || !location || !description || !technologies) {
      return res.status(400).json({ message: 'Missing required fields: company, position, startDate, location, description, or technologies' });
    }

    const employmentRecord = new Employment({ company, position, startDate, endDate, location, description, technologies });

    try {
      const newEmploymentRecord = await employmentRecord.save();
      res.status(201).json(newEmploymentRecord);
    } catch (err) {
      res.status(400).json({ message: 'Error creating employment record', error: err.message });
    }
  },

  // Update an employment record by ID
  updateEmployment: async (req, res) => {
    try {
      const updatedEmploymentRecord = await Employment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedEmploymentRecord) return res.status(404).json({ message: 'Employment record not found' });
      res.json(updatedEmploymentRecord);
    } catch (err) {
      res.status(400).json({ message: 'Error updating employment record', error: err.message });
    }
  },

  // Delete an employment record by ID
  deleteEmployment: async (req, res) => {
    try {
      const employmentRecord = await Employment.findByIdAndDelete(req.params.id);
      if (!employmentRecord) return res.status(404).json({ message: 'Employment record not found' });
      res.json({ message: 'Employment record deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting employment record', error: err.message });
    }
  }
};

module.exports = employmentController;
