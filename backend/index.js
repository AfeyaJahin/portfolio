require('dotenv').config({ path: './.env' }); // Load environment variables from .env file // Check that the DB_URI variable is set


const express = require('express');
const connectDB = require('./config/db'); // Ensure you have this file to handle DB connection

// Import routes
const educationRoutes = require('./routes/education'); // Adjust the path as necessary
const employmentRoutes = require('./routes/employment');
const leadershipRoutes = require('./routes/leadership');
const projectRoutes = require('./routes/project');


const app = express();

connectDB(); // Connect to the MongoDB database

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
}).on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Port ${port} is already in use, trying another one...`);
    app.listen(0); // 0 means random available port
  } else {
    console.error(error);
  }
});

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Use CORS for handling cross-origin requests, if you're calling your API from a different domain
const cors = require('cors');

app.use(cors({
  origin: ['https://afeyajahin.vercel.app/education','https://afeyajahin.vercel.app/experience'], // Replace with your frontend URL
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));

// Use the education routes with the base path '/api/education'
app.use('/api/education', educationRoutes);
app.use('/api/employment', employmentRoutes);
app.use('/api/leadership', leadershipRoutes);
app.use('/api/projects', projectRoutes);

// Basic route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World from the server!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err.stack);
  res.status(500).send({ error: 'Something broke!' });
});




