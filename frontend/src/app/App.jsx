// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';  // Import Home from the pages folder
import Education from '../pages/education';  // Import Education from the pages folder
import Experience from '../pages/experience';  // Import Experience from the pages folder
import Resource from '../pages/resource';  // Import Resource from the pages folder
import NavigationBar from '../components/navbar';
import Footer from '../components/footer';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../theme'; // Import the theme you defined
import CssBaseline from '@mui/material/CssBaseline';


export const RouteLocations = {
  home: "/",
  education: "/education",
  experience: "/experience",
  resource: "/resource",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline /> 
    <Router>
      <NavigationBar />
      <Box sx={{ paddingTop: '80px' }}> {/* Adjust the padding to match your Navbar's height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resource" element={<Resource />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Box>
    </Router>
    <Footer />
    </ThemeProvider>
  );
}

export default App;

