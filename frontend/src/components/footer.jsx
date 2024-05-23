import { Box, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '292C33', // Match with your footer background
      }}
    >
      <Link href="https://www.linkedin.com/in/afeyajahin/" target="_blank">
        <IconButton>
          <LinkedInIcon sx={{ color: 'white' }} />
        </IconButton>
      </Link>
      <Link href="mailto:jahin22a@mtholyoke.edu">
        <IconButton>
          <EmailIcon sx={{ color: 'white' }} />
        </IconButton>
      </Link>
      <Link href="https://github.com/AfeyaJahin" target="_blank">
        <IconButton>
          <GitHubIcon sx={{ color: 'white' }} />
        </IconButton>
      </Link>
      <Link href="https://drive.google.com/file/d/1Y572iXqoQSvF_6HkCbM-r8GAC8_DbwlG/view?usp=sharing" target="_blank">
        <IconButton>
          <DescriptionIcon sx={{ color: 'white' }} />
        </IconButton>
      </Link>
    </Box>
  );
};

export default Footer;
