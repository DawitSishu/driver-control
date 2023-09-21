import { useState, useEffect } from "react";
import {
  Toolbar,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  IconButton,
  Drawer,
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import { Group, Edit, PersonAdd, AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const drawerWidth = 240;

const iconMap = {
  Profile: <AccountCircle color="secondary" />,
  Users: <Group color="secondary" />,
  "Create User": <PersonAdd color="secondary" />,
};
const index = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Profile");

  const handleItemClick = (text) => {
    setSelectedItem(text);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>Employee Name</Toolbar>
      <Divider />
      <List>
        {["Profile", "Users", "Create User"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleItemClick(text)}>
              <ListItemIcon>{iconMap[text]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "primary",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Employee Panel
          </Typography>
          <Button variant="outlined" color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>{selectedItem}</Typography>
      </Box>
    </Box>
  );
};

export default index;
