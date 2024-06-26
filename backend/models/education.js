const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  imageUrl: String,
  institution: String,
  degree: String,
  fieldOfStudy: String,
  startYear: Date,
  endYear: Date,
  courses: [String],
  honors: [String],
  skills: [String],
  activitiesSocieties: [String],
  GPA: Number,
  programs: [{
    programName: String,
    description: String,
    startDate: Date,
    endDate: Date,
    details: [String]
  }]
}, { timestamps: true });

module.exports = mongoose.model('Education', educationSchema);
