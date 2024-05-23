import { useState, useMemo } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled, ThemeProvider, useTheme } from "@mui/system";
import {theme} from "../theme"; // Adjust the import path as needed
import logo from "../assets/logo.png"; // Adjust the import path as needed
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";

// Styled components here
const NavigationLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },
  display: "block",
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  backgroundColor: "#242424",
  width: 190,
  height: "100%",
  padding: theme.spacing(2),
  boxShadow: "0 0 10px #537FE7, 0 0 10px #537FE7, 0 0 10px #537FE7",
}));

// const NavigationButton = styled(Button)(({ theme }) => ({
//   fontWeight: "bold",
//   border: "1px solid transparent",
//   "&:hover": {
//     boxShadow: "0 0 10px #537FE7, 0 0 10px #537FE7, 0 0 10px #537FE7",
//   },
//   "&:focus": {
//     outline: "none",
//   },
//   textTransform: 'none',
//   fontFamily: '"Georgia", sans-serif',
//   fontSize: "15px",
//   height: "40px",
//   margin: "0 10px",
//   color: theme.palette.primary.main, // Default color, will be overridden by spans
// }));



const NavigationButton = styled(Button)(({ theme, active }) => ({
  fontWeight: "bold",
  border: "1px solid transparent",
  boxShadow: active ? "0 0 10px #537FE7, 0 0 10px #537FE7, 0 0 10px #537FE7" : "none",
  "&:hover, &:active": {
    boxShadow: "0 0 10px #537FE7, 0 0 10px #537FE7, 0 0 10px #537FE7",
  },
  textTransform: 'none',
  fontFamily: '"Georgia", sans-serif',
  fontSize: "15px",
  height: "40px",
  margin: "0 10px",
  color: theme.palette.primary.main,
}));

const NavigationBarButton = ({ page, text, extension }) => {
  const themeUsed = useTheme();
  return (
    <NavigationButton style={page === text.toLowerCase() ? { backgroundColor: "#537FE7" } : null}>
      <span style={{ color: "#B0BEC5" }}>{text}</span>
      <span style={{ color: "#B57BD2" }}>{extension}</span>
    </NavigationButton>
  );
};

const NavigationBar = ({ page }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get the current location
  const themeUsed = useTheme();
  const isMobile = useMediaQuery(themeUsed.breakpoints.down("md"));
  const isActive = (path) => location.pathname === path;

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  // Function to create a navigation button
  const createNavigationButton = (to, text, extension) => (
    <NavigationLink to={to} key={text}>
      <NavigationButton active={isActive(to)}>
        <span style={{ color: "#B0BEC5" }}>{text}</span>
        <span style={{ color: "#B57BD2" }}>{extension}</span>
      </NavigationButton>
    </NavigationLink>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" sx={{ backgroundColor: theme.palette.primary.main, maxHeight: '70px' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
            <img src={logo} alt="Logo" height="80" style={{ margin: "10px", marginLeft: "40px" }} />
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                PaperProps={{
                  sx: {
                    backgroundColor: "black",
                    boxShadow: "0 0 10px #537FE7, 0 0 20px #537FE7, 0 0 30px #537FE7",
                  },
                }}
              >
                <StyledStack
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  {createNavigationButton("/", "Home", ".aj")}
                  {createNavigationButton("/education", "Education", ".aj")}
                  {createNavigationButton("/experience", "Experience", ".aj")}
                  {createNavigationButton("/resource", "Resource", ".aj")}
                </StyledStack>
              </SwipeableDrawer>
            </>
          ) : (
            <>
              {createNavigationButton("/", "Home", ".aj")}
              {createNavigationButton("/education", "Education", ".aj")}
              {createNavigationButton("/experience", "Experience", ".aj")}
              {createNavigationButton("/resource", "Resource", ".aj")}
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavigationBar;

