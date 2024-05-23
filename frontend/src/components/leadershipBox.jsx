/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Box, Chip, CardMedia } from '@mui/material';

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const LeadershipBox = ({ leadership }) => {
  const startDate = formatDate(leadership.startDate);
  const endDate = leadership.endDate ? formatDate(leadership.endDate) : 'Present';

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 3,
        backgroundColor: 'rgba(219,219,219,1)',
        padding: '20px',
        position: 'relative',
        '&:hover': {
          backgroundColor: '#f9f9f9',
        },
        alignItems: 'center',
        boxShadow: 'none',
      }}
    >
      {/* Left Section: Image */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: 100, objectFit: 'contain', marginBottom: 1 }}
          image={
            leadership.imageUrl ||
            'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
          }
          alt={leadership.organization}
        />
      </Box>

      {/* Right Section: Details */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent
          sx={{
            flex: '1 0 auto',
            padding: '8px 16px',
            '&:last-child': { paddingBottom: '8px' },
          }}
        >
          {/* Header with Position, Organization, and Date */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', fontSize: '16.5px' }}>
              {leadership.organization}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              {startDate} - {endDate}
            </Typography>
          </Box>
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', fontSize: '13px' }}>
            {leadership.position}
          </Typography>
          {/* Description as Bullet Points */}
          <ul style={{ paddingLeft: '20px', marginTop: 0, marginBottom: '16px' }}>
            {leadership.description.map((point, index) => (
              <li key={index}>
                <Typography variant="body2" color="text.secondary">
                  {point}
                </Typography>
              </li>
            ))}
          </ul>
          {/* Skills Section */}
          {leadership.skills.length > 0 && (
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <Typography sx={{ 
                  fontWeight: 'bold', 
                  mr: 1, 
                  fontSize: '12px',
                  lineHeight: '10px', // Adjust line height to center text vertically with chips
                  alignItems: 'center', // Ensure vertical centering
                }}>
                Skills:
              </Typography>
              {leadership.skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  size="small"
                  sx={{
                    marginRight: 1,
                    marginBottom: 1,
                    borderRadius: '12px',
                    fontSize: '10px',
                    height: '24px', // Ensure chip height matches the line height of text
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    color: 'black',
                    border: '1px solid #95C077',
                    boxShadow: '0 0 1px #008000',
                    display: 'flex',
                    marginTop: '6px',
                  }}
                />
              ))}
            </Box>
          )}
        </CardContent>
      </Box>
    </Card>
  );
};

export default LeadershipBox;
