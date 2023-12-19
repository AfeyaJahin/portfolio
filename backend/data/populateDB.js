const mongoose = require('mongoose');
const Education = require('../models/education'); // adjust path if necessary
console.log(Education);
console.log(Object.getOwnPropertyNames(Education)); // This will print all properties and methods of the Education model


const educationData = require('./educationData.json'); // the JSON file you created

require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('Connected to MongoDB...');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
  }
};

const importData = async () => {
    try {
      await connectDB();
      
      // Attempt to clear the existing data
      const deleteResult = await Education.deleteMany({});
      console.log('DeleteMany result:', deleteResult);
  
      // Insert the new data
      const insertResult = await Education.insertMany(educationData);
      console.log('InsertMany result:', insertResult);
  
      console.log('Data successfully imported!');
    } catch (err) {
      console.error('Error importing data', err);
    } finally {
      // Close database connection whether there was an error or not
      mongoose.connection.close();
    }
  };
  
  importData();
