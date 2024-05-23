/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const EducationBox = ({ education }) => {
  const startDate = formatDate(education.startYear);
  const endDate = education.endYear ? formatDate(education.endYear) : 'Present'; // Handle ongoing education
  
  
  return (
    <Card sx={{
      display: 'flex',
      marginBottom: 3,
      backgroundColor: 'rgba(219,219,219,1)', // This is a light grey background
      padding: '20px',
      position: 'relative', // Needed for absolute positioning of the date
      '&:hover': {
        backgroundColor: '#f9f9f9', // This is a lighter grey for hover
      },
      alignItems: 'center', // Center items vertically
      boxShadow: 'none', // Remove the default box-shadow
    }}>
      <CardMedia
        component="img"
        sx={{ width: 100, objectFit: 'contain', marginRight: 2 }}
        image={education.imageUrl || 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} // Replace with your fallback image URL
        alt={education.institution}
        
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent sx={{ flex: '1 0 auto', padding: '8px 16px', '&:last-child': { paddingBottom: '8px' } }}>
          <Typography variant="h6" component="h2" gutterBottom>
            {education.institution}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {education.degree} in {education.fieldOfStudy}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            {education.courses.join(', ')}
          </Typography>
          {/* Additional information can be added here */}
        </CardContent>
        {/* Positioning the date at the top right corner */}
        <Typography variant="body2" color="text.secondary" sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          padding: '2px 8px',
          fontWeight: 'bold',
          fontStyle: 'italic',
        }}>
          {startDate} - {endDate}
        </Typography>
      </Box>
    </Card>
  );
};

export default EducationBox;
