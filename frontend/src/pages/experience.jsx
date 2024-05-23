import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab, Box, Typography, Paper, Grid } from '@mui/material';
import EmploymentBox from '../components/employmentBox'; // Assume you already have this component
import LeadershipBox from '../components/leadershipBox'; // Assume you already have this component
import ProjectsBox from '../components/projectsBox'; 
import LinkIcon from '@mui/icons-material/Link';

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography component={'span'}>{children}</Typography>
      </Box>
    )}
  </div>
);

const Experience = () => {
  const [value, setValue] = useState(0);
  const [employmentData, setEmploymentData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [leadershipData, setLeadershipData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Fetch data from your backend
  const fetchData = async () => {
    try {
      const employmentResponse = await fetch('http://localhost:3005/api/employment');
      const projectsResponse = await fetch('http://localhost:3005/api/projects');
      const leadershipResponse = await fetch('http://localhost:3005/api/leadership');
      console.log(leadershipResponse.ok);
      if (employmentResponse.ok && projectsResponse.ok && leadershipResponse.ok) {
        setEmploymentData(await employmentResponse.json());
        setProjectsData(await projectsResponse.json());
        setLeadershipData(await leadershipResponse.json());
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Fetch all data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
       <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 2, color: 'white', fontFamily: 'Georgia', fontStyle: 'italic', fontSize: '30px' }}>
        Experience
      </Typography>
      <Paper
        sx={{
          backgroundColor: 'rgba(219,219,219,1)',
          padding: '24px',
          boxShadow: 'none',
          borderRadius: '0px',
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="experience tabs"
          variant="fullWidth"
          sx={{ minHeight: '48px' }}
        >
          <Tab label="Employment" sx={{ minWidth: 'auto', padding: '6px 24px' }} />
          <Tab label="Projects" sx={{ minWidth: 'auto', padding: '6px 24px' }} />
          <Tab label="Leadership" sx={{ minWidth: 'auto', padding: '6px 24px' }} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            {employmentData.map((employment, index) => (
              <Grid item xs={12} key={employment._id || index}>
                <EmploymentBox employment={employment} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            {projectsData.map((project, index) => (
              <Grid item xs={12} key={project._id || index}>
                <ProjectsBox project={project} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={2}>
            {leadershipData.map((leadership, index) => (
              <Grid item xs={12} key={leadership._id || index}>
                <LeadershipBox leadership={leadership} />
              </Grid>
            ))}
          </Grid>

        </TabPanel>
      </Paper>
    </Container>
  );
};

export default Experience;

// import React, { useState } from 'react';
// import { Container, Tabs, Tab, Box, Typography, Paper } from '@mui/material';

// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography component={'span'}>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// const Experience = () => {
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Container maxWidth="md" sx={{ my: 4 }}>
//       <Paper sx={{
//         backgroundColor: 'rgba(219,219,219,1)',
//         padding: '24px', // reduced padding to match example
//         boxShadow: 'none', // removed the shadow to match example
//         borderRadius: '0px', // removed border radius to match example
//         mb: 2 // Margin bottom for spacing
//       }}>
//         <Tabs value={value} onChange={handleChange} aria-label="experience tabs" variant="fullWidth" sx={{ minHeight: '48px' }}>
//           <Tab label="Employment" sx={{ minWidth: 'auto', padding: '6px 24px' }} />
//           <Tab label="Projects" sx={{ minWidth: 'auto', padding: '6px 24px' }} />
//           <Tab label="Leadership" sx={{ minWidth: 'auto', padding: '6px 24px' }} />
//         </Tabs>
//         <TabPanel value={value} index={0}>
//           Employment Content
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           Projects Content
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//           Leadership Content
//         </TabPanel>
//       </Paper>
//     </Container>
//   );
// };

// export default Experience;
