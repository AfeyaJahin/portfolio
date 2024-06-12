
// frontend/src/pages/Education.jsx

import  { useState, useEffect } from 'react';
import EducationBox from '../components/educationBox';
import { Container, Grid, Typography, Box } from '@mui/material';

const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://afeyajahinbackend.vercel.app/api/education');
        if (response.ok) {
          const data = await response.json();
          setEducations(data);
        } else {
          console.error('Failed to fetch');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 2, color: 'white', fontFamily: 'Georgia', fontStyle: 'italic', fontSize: '30px' }}>
      Education
    </Typography>
      <Box sx={{
        backgroundColor: 'rgba(219,219,219,1)', // This is a grey background for the entire section
        padding: '50px',
        // borderRadius: '8px', // Optional: if you want rounded corners
      }}>
        <Grid container spacing={2}>
          {educations.map((education, index) => (
            <Grid item xs={12} key={education._id || index}>
              <EducationBox education={education} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Education;

