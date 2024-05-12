const mongoose = require('mongoose');

// Define the schema for the project
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  teamSize: {
    type: Number,
    required: false // Since some projects do not have teamSize specified
  },
  Award: {
    type: String,
    required: false // Since some projects do not have teamSize specified
  },
  description: {
    type: [String], // Array of strings for bullet points
    required: true
  },
  skills: {
    type: [String], // Array of strings for skills
    required: true
  },
  imageUrl: {
    type: String,
    required: false // Since not all projects have a link
  },
  link: {
    type: String,
    required: false // Since not all projects have a link
  }
}, { timestamps: true }); // Add timestamps to record createdAt and updatedAt

// Create the model from the schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
