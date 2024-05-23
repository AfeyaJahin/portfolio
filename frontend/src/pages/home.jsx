
import { Box } from '@mui/material';
import myImage from '../assets/intro.png';

const Home = () => {
  return (
    <div>
  
      <Box
        sx={{
          width: {
            xs: '100%', // full width on extra-small screens
            sm: '100%', // 80% width on small screens
            md: '100%', // 60% width on medium screens
            lg: '100%', // 50% width on large screens
            xl: '100%', // 40% width on extra-large screens
            display: 'flex', // Use flexbox for centering
            justifyContent: 'center', // Horizontally center the child
            alignItems: 'center', // Vertically center the child (if needed)
            height: '100%', // Set to the desired height or leave it to auto
            width: '100%', // Container takes full width
            maxWidth: '100%', // To ensure the container doesn't overflow the parent
            overflow: 'hidden', // Prevents any potential overflow
          },
          
          maxWidth: '100%', // To ensure the image doesn't overflow the parent container
        }}
      >
        <img src={myImage} alt="My Image" style={{ width: '80%', height: 'auto' }} />
      </Box>
    </div>
  );
};

export default Home;




