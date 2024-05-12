const mongoose = require('mongoose');

const employmentSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    default: "Present" // Sets "Present" if no end date is provided
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: [String], // Array of strings for listing responsibilities or accomplishments
    required: true
  },
  skills: {
    type: [String], // Array of strings for technologies used
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  }
}, { timestamps: true });

const Employment = mongoose.model('Employment', employmentSchema);

module.exports = Employment;
