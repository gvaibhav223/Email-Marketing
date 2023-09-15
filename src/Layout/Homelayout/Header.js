import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  UilClockThree,
  UilMapMarker,
  UilInstagram,
  UilLinkedin,
  UilFacebook,
  UilPhone,
} from "@iconscout/react-unicons";

import Logo from "../../Component/Logo";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "About US", "Project", "Services", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* <CssBaseline /> */}
      <AppBar component="nav" className="app-bar-mini">
        <Toolbar className="toolbar-mini w-100">
          <div className="topbar">
            <div className="info">
              <UilClockThree /> Monday - Friday8AM - 9PM
            </div>
            <div className="info">
              <UilMapMarker /> 725 Park Ave, New York
            </div>
            <div className="social-icon">
              <UilInstagram />
              <UilFacebook />
              <UilLinkedin />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar component="nav" className="app-bar">
        <Toolbar className="toolbar-navigation">
          <Box className="container d-flex align-items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { sm: "block" } }}
            >
              <Logo />
            </Typography>
            <Box
              sx={{ display: { xs: "none", sm: "block" } }}
              className="navlinkcontainer"
            >
              {navItems.map((item) => (
                <div className="navlinks" key={item} sx={{ color: "inherit" }}>
                  {item}
                </div>
              ))}
              <div className="phone-container">
                <div className="">
                  <IconButton className="phone-circle">
                    <UilPhone />
                  </IconButton>
                  <span>+(91) 9856985698</span>
                </div>
              </div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          anchor={"right"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default DrawerAppBar;
