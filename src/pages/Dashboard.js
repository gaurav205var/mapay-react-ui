import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Layout from "../components/Layout/Layout";

const StandaloneSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const drawerItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "About", icon: <InfoIcon /> },
    { text: "Contact", icon: <ContactMailIcon /> },
  ];

  return (
    <>
      <Layout>
        {/* Arrow Button for Toggling Sidebar */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleSidebarToggle}
          sx={{
            marginRight: "36px", // Adjust as needed
            ...(isSidebarOpen && { display: "none" }),
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Sidebar */}
        <Drawer
          variant="persistent"
          anchor="left"
          open={isSidebarOpen}
          sx={{
            width: 240,
            flexShrink: 0,
          }}
        >
          <div>
            {/* Arrow Button for Closing Sidebar */}
            <IconButton onClick={handleSidebarToggle}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {drawerItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Layout>
    </>
  );
};

export default StandaloneSidebar;
