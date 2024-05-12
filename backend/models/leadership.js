const mongoose = require('mongoose');

const leadershipSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    default: "Present"
  },
  description: {
    type: [String], // List of responsibilities or accomplishments
    required: true
  },
  skills: {
    type: [String], // List of skills acquired or used
    required: false
  },
  imageUrl: {
    type: String,
    required: false
  }
}, { timestamps: true });

const leadership = mongoose.model('leadership', leadershipSchema);

module.exports = leadership;
