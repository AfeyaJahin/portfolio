/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Box, Chip, IconButton, CardMedia } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const ProjectsBox = ({ project }) => {
  const formattedDate = formatDate(project.date);

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
      {/* Left Section: Image and Link */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: 100, objectFit: 'contain', marginBottom: 1 }}
          image={
            project.imageUrl ||
            'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
          }
          alt={project.name}
        />
        {/* Link Icon */}
        {project.link && (
          <IconButton
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ borderRadius: '50%', border: '1px solid grey', padding: 1 }}
          >
            <OpenInNewIcon fontSize="small" />
          </IconButton>
        )}
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
          {/* Header with Project Name, Award, and Date */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', fontSize:'16.5px' }}>
              {project.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              {formattedDate}
            </Typography>
          </Box>
          {project.Award && (
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', fontSize:'13px'}}>
              Award: {project.Award}
            </Typography>
          )}
          <ul style={{ paddingLeft: '20px', marginTop: 0, marginBottom: '16px' }}>
            {project.description.map((point, index) => (
              <li key={index}>
                <Typography variant="body2" color="text.secondary">
                  {point}
                </Typography>
              </li>
            ))}
          </ul>
          {/* Skills Section */}
          {project.skills.length > 0 && (
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mr: 1,
                  fontSize: '12px',
                  lineHeight: '10px',
                  alignItems: 'center',
                }}
              >
                Skills:
              </Typography>
              {project.skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  size="small"
                  sx={{
                    marginRight: 1,
                    marginBottom: 1,
                    borderRadius: '12px',
                    fontSize: '10px',
                    height: '24px',
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

export default ProjectsBox;
