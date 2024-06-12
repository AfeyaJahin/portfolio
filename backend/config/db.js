const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.time('MongoDB Connection');
    await mongoose.connect(process.env.DB_URI);
    console.timeEnd('MongoDB Connection');
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
