const mongoose = require('mongoose');
const Education = require('../models/education'); // adjust path if necessary
const Project = require('../models/project'); // adjust path if necessary
const Employment = require('../models/employment');
const leadershipData = require('./leadershipData.json');

const educationData = require('./educationData.json'); // the JSON file you created
const projectsData = require('./projectsData.json'); // the JSON file with all projects
const employmentData = require('./employmentData.json');
const leadership = require('../models/leadership');

require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB...');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
  }
};

const importData = async () => {
  await connectDB();
  
  try {
    // Attempt to clear the existing education data
    const deleteEducationResult = await Education.deleteMany({});
    console.log('Education deleteMany result:', deleteEducationResult);
    
    // Insert the new education data
    const insertEducationResult = await Education.insertMany(educationData);
    console.log('Education insertMany result:', insertEducationResult);

    // Attempt to clear the existing projects data
    const deleteProjectsResult = await Project.deleteMany({});
    console.log('Project deleteMany result:', deleteProjectsResult);
    
    // Insert the new projects data
    const insertProjectsResult = await Project.insertMany(projectsData);
    console.log('Project insertMany result:', insertProjectsResult);


    //Attempt to clear the existing employment data
    const deleteEmploymentResult = await Employment.deleteMany({});
    console.log('Employment deleteMany result:', deleteEmploymentResult);

    // Insert the new employment data
    const insertEmploymentResult = await Employment.insertMany(employmentData);
    console.log('Employment insertMany result:', insertEmploymentResult);


    //Attempt to clear the existing leadership data
    const deleteLeadershipResult = await leadership.deleteMany({});
    console.log('Leadership deleteMany result:', deleteLeadershipResult);

    // Insert the new leadership data
    const insertLeadershipResult = await leadership.insertMany(leadershipData);
    console.log('Leadership insertMany result:', insertLeadershipResult);

    console.log('All data successfully imported!');

    

  } catch (err) {
    console.error('Error importing data:', err);
  } finally {
    // Close database connection whether there was an error or not
    mongoose.connection.close();
  }
};

importData();
